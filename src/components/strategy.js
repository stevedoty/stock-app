import React, {Component} from 'react'



class Strategy extends Component {
  constructor(props){
    super(props);
    this.state = {
      symbol:"NCSM",
      shares:100,
      name:"NCS Multistage Holdings",
      price:1.00,
      secondPrice:"",
      secondShares:"",
      thirdPrice:"",
      thirdShares:"",
      fourthPrice:"",
      fourthShares:"",
      fifthPrice:"",
      fifthShares:"",
      value:"",
      value2:""
    }
  }
  handleSubmit = (e) => {
    const {symbol, shares, price, secondPrice, value, value2} = this.state
  }
  handleStockChange = (e) => {

  }
  handlePriceChange = (e) => {
    const {price, secondPrice, thirdPrice, fourthPrice, fifthPrice} = this.state
    let factor = 1.38
    let newPrice = e.target.value
    let newSecondPrice = newPrice * factor
    let newThirdPrice = newSecondPrice * factor
    let newFourthPrice = newThirdPrice * factor
    let newFifthPrice = newFourthPrice * factor
    this.setState({
      price: newPrice,
      secondPrice: newSecondPrice,
      thirdPrice: newThirdPrice,
      fourthPrice: newFourthPrice,
      fifthPrice: newFifthPrice
    })
  }
  handleShareChange = (e) => {
    const {shares, secondShares, thirdShares, fourthShares, fifthShares} = this.state
    let factor = 1.62
    let newShares = e.target.value
    let newSecondShares = newShares / factor
    let newThirdShares = newSecondShares / factor
    let newFourthShares = newThirdShares / factor
    let newFifthShares = newFourthShares / factor
    this.setState({
      price: newShares,
      secondShares: newSecondShares,
      thirdShares: newThirdShares,
      fourthShares: newFourthShares,
      fifthShares: newFifthShares
    })
  }
  render(){
    const {
      symbol,
      name,
      price,
      shares,
      secondPrice,
      secondShares,
      thirdPrice,
      thirdShares,
      fourthPrice,
      fourthShares,
      fifthPrice,
      fifthShares,
    } = this.state
    return(
      <div>
        <form>
          <input
            type="text"
            className="symbol"
            placeholder="stock"
            onChange={this.handleStockChange}
          ></input>
          <input
            type="text"
            className="price"
            placeholder="price"
            onChange={this.handlePriceChange}
          ></input>
          <input
            type="text"
            className="shares"
            placeholder="shares"
            onChange={this.handleShareChange}
          ></input>
        </form>
        <button type="submit" value="Submit" onClick={this.handleSubmit}>submit</button>
        <div>symbol: {symbol}</div>
        <div>name:  {name}</div>
        <div>price: {price}   shares: {shares}</div>
        <div>secondPrice: {secondPrice}   secondShares: {secondShares}</div>
        <div>thirdPrice:  {thirdPrice}    thirdShares:  {thirdShares}</div>
        <div>fourthPrice: {fourthPrice}   fourthShares:  {fourthShares}</div>
        <div>fifthPrice:  {fifthPrice}    fifthShares:  {fifthShares}</div>

        <p>This is a very basic software that takes an entered stock name, price, and share quantity.
        It then provides suggested moves to take at different increases in price. The model is based off the Golden Ratio found in Nature.</p>
      </div>
    )
  }
}
export default Strategy;
