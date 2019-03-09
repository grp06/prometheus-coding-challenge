import React, { Component } from 'react'
import './App.scss'

class App extends Component {
  state = {
    countryData: {},
    regionExpanded: null,
    sortBy: 'name',
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v1/all')
      .then(res => res.json())
      .then(data => {
        if (data.length) {
          const reformattedData = allData => {
            return allData.reduce((all, item, idx) => {
              if (!all[item.region]) {
                all[item.region == '' ? 'no-region-given' : item.region] = [
                  item,
                ]
              } else {
                all[item.region].push(item)
              }
              return all
            }, {})
          }
          this.setState({
            countryData: reformattedData(data),
          })
        }
      })
  }

  toggleRegionExpanded = regionToggled => {
    // TODO: refactor the shape of the state
    // I'm doing it like this becuase if you're sorting by population density on one region
    // then click another region, the UI will display that its sorted by density
    // but that sort hasn't happned yet. So I just default the sort by name
    this.sortBy('name', regionToggled)
  }

  getSortClass = sortType => {
    const { sortBy } = this.state
    if (sortType === sortBy) {
      return 'selected'
    }
    return ''
  }

  sortBy = (sortType, region) => {
    const { countryData, regionExpanded } = this.state
    const prevRegionData = countryData[regionExpanded || region]
    let newRegionData
    if (sortType === 'density') {
      newRegionData = prevRegionData.sort((a, b) => {
        const aDensity = a.population / a.area
        const bDensity = b.population / b.area
        return bDensity - aDensity
      })
    } else {
      newRegionData = prevRegionData.sort((a, b) => {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
      })
    }

    const newCountryData = {
      ...countryData,
      ...{
        [regionExpanded || region]: newRegionData,
      },
    }
    const setRegionExpanded = () => {
      if (!region) {
        return regionExpanded
      } else if (regionExpanded === region) {
        return ''
      }
      return region
    }
    this.setState({
      sortBy: sortType,
      countryData: newCountryData,
      regionExpanded: setRegionExpanded(),
    })
  }

  renderContent = () => {
    const { countryData, regionExpanded } = this.state
    const content = []
    for (let key in countryData) {
      const regionArray = countryData[key]
      content.push(
        <div key={key} className='region-block'>
          <div className='region-name'>
            <div
              className='click-area'
              onClick={() => this.toggleRegionExpanded(key)}
            >
              {key}
            </div>
            <div className={regionExpanded === key ? 'show' : 'hide'}>
              <span
                onClick={() => this.sortBy('name')}
                className={this.getSortClass('name')}
              >
                Name
              </span>
              |
              <span
                onClick={() => this.sortBy('density')}
                className={this.getSortClass('density')}
              >
                Population Density
              </span>
            </div>
          </div>
          <div className={regionExpanded === key ? 'show' : 'hide'}>
            {regionArray.map((country, idx) => {
              const {
                alpha2Code,
                capital,
                region,
                population,
                area,
                timezones,
                languages,
              } = country
              return (
                <div className='country' key={idx}>
                  <div className='name'>{country.name}</div>
                  <div className='country-info'>
                    <div>
                      <span>Alpha2Code:</span> {alpha2Code}
                    </div>
                    <div>
                      <span>Capital:</span> {capital}
                    </div>
                    <div>
                      <span>Region:</span> {region}
                    </div>
                    <div>
                      <span>Population:</span> {population}
                    </div>
                    <div>
                      <span>Area:</span> {area}
                    </div>
                    <div>
                      <span>Population Density:</span>
                      <br />
                      {Math.round(population / area)} people per sq/mi
                    </div>
                    <div>
                      <span>Number of Timezones:</span> {timezones.length}
                    </div>
                    <div>
                      <span>Languages Spoken:</span>
                      <ul>
                        {languages.map((language, index) => (
                          <li key={index}>{language}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>,
      )
    }
    return content
  }

  render() {
    return (
      <div className='App'>
        {this.renderContent()}
        <div className='tips'>
          ⚡Click a Region to expand. <br />
          ⚡Hover for more details
        </div>
      </div>
    )
  }
}

export default App
