import React, { Component } from "react";

function Row({ letter, cities, selectCity, heading = false }) {
  return (
    <div className="top-header-geolocation-city-list-row">
      {!heading && <span className="letter">{letter}</span>}
      {cities.map(city => {
        let itemClassName = 'cityName ';
        itemClassName += heading ? 'firstCity ' : '';
        itemClassName += city.selected ? 'activeCityName ' : '';
        return (<div key={city.id} className='marginBottom'>
          <span
            className={itemClassName}
            onClick={() => {
              selectCity(city);
            }}
          >
            {city.town}
          </span>
        </div>)
      })}
    </div>
  );
}

function Column({ heading, items, selectCity }) {
  return (
    <div className="top-header-geolocation-city-list-column">
      {heading && <Row heading={true} cities={[heading]} selectCity={selectCity} />}
      {
        Object.keys(items).map(letter => {
          const cities = items[letter];
          return (
            <Row key={letter} cities={cities} letter={letter} selectCity={selectCity}/>
          )
        })
      }
    </div>
  );
}

export class ListOfCities extends Component {
  state = {
    selectedItem: null,

    citiesColumns: [
      {
        heading: {
          town: "Москва",
          id: "133"
        },
        items: {
          'А': [{
            id: "216",
            town: "Архангельск"
          }],
          'В':[{
            id: "71",
            town: "Волгоград"
          },
          {
            id: "74",
            town: "Воронеж"
          }],
          'Е':[{
            id: "90",
            town: "Екатеринбург"
          }],
          'З':[{
            id: "678",
            town: "Зеленоград"
          }],
          'И':[{
            id: "29",
            town: "Иркутск"
          }]
        }
      },
      {
        items: {
          'К':[{
            id: "102",
            town: "Казань"
          },
          {
            id: "104",
            town: "Калуга"
          },
          {
            id: "120",
            town: "Краснодар"
          }],
          'М':[{
            id: "136",
            town: "Мытищи"
          }],
          'Н':[{
            id: "137",
            town: "Набережные Челны"
          },
          {
            id: "140",
            town: "Нижний Новгород"
          },
          {
            id: "1100",
            town: "Новая Адыгея"
          },
          {
            id: "143",
            town: "Новосибирск"
          },
          {
            id: "654",
            town: "Новый Уренгой"
          }],
          'П':[{
            id: "159",
            town: "Петрозаводск"
          }]
        }
      },
      {
        items: {
          'С':[{
            id: "170",
            town: "Самара"
          }],
          'Т':[{
            id: "184",
            town: "Тамбов"
          },
          {
            id: "186",
            town: "Тольятти"
          }],
          'У':[{
            id: "191",
            town: "Уфа"
          }],
          'Ф':[{
            id: "519",
            town: "Федяково"
          }],
          'Я':[{
            id: "201",
            town: "Ярославль"
          }]
        }
      }
    ]
  };

  selectCity = (n) => {
    this.state.selectedItem.selected = false;
    n.selected = true;
    this.setState({
      selectedItem: n
    }, () => {
      this.props.changeCurrentCity(n.town);
    });
  };

  componentDidMount = () => {
    const current = this.props.currentCity;
    let selectedItem = null;

    if (this.state.citiesColumns[0].heading.town === current) {
      selectedItem = this.state.citiesColumns[0].heading;
    } else {
      selectedItem = this._findByCityName(current);
    }

    selectedItem.selected = true;

    this.setState({
      selectedItem: selectedItem
    });
  };

  _findByCityName = (name) => {
    const letter = name[0];
    const column = this.state.citiesColumns.find(i => i.items.hasOwnProperty(letter));
    return column.items[letter].find(i => i.town === name);
  }

  render() {
    return (
      <div className="top-header-geolocation-city-list">
        {
          this.state.citiesColumns.map((column, idx) => {
            return (
              <Column key={idx} heading={column.heading} items={column.items} selectCity={this.selectCity}/>
            );
          })
        }
      </div>
    );
  }
}
