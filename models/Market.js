const { Schema, model } = require('mongoose');
 
const marketSchema = new Schema(
  {
    name: {
      type: String,
      enum: ['Alcampo', 'Bonarea', 'Carrefour', 'Dia', 'Mercadona'],
      required: [true, 'Please add a market name']
    },
    logo: {
      type: String,
      default: '../images/market-default-edit.png'
    },
    postalCode: {
      type: Number,
      required: [true, 'Please add its Postal Code'],
      enum: ['08003', '8005', '8036'],
    },
    address: {
      type: String
    },
  },
  {
    timestamps: true
  }
);
 
const Market = model('Market', marketSchema);

module.exports = Market;