NewCollections = new orion.collection('newCollections', {
  singularName: 'New collections', // The name of one of these items
  pluralName: 'New collections', // The name of more than one of these items
  link: {
    title: 'New collections' 
  },

  tabular: {

    columns: [
      { 
        data: "tovarHeader", 
        title: "Header" 
      },
       { 
        data: "firma", 
        title: "Company" 
      },
       { 
        data: "price", 
        title: "Price" 
      },
      { 
        data: "imgSrc", 
        title: "Main src" 
      },
       { 
        data: "date", 
        title: "date" 
      }
    
    ]
  }
});




NewCollections.attachSchema(new SimpleSchema({
    imgSrc: {
    type: String,
    optional: false,
    label: 'imgSrc',
  },
   hover: {
    type: String,
    optional: true,
    label: 'hover',
  },
   tovarHeader: {
    type: String,
    optional: false,
    label: 'tovarHeader',
  },
   firma: {
    type: String,
    optional: true,
    label: 'firma',
  },
   akcii: {
    type: String,
    optional: true,
    label: 'akcii',
  },
  price: {
    type: Number,
    optional: false,
    label: 'price',
  },
    sale: {
    type: String,
    optional: true,
    label: 'sale',
  },
  news: {
    type: String,
    optional: true,
    label: 'new',
  },
   tovarSquereColor: {
    type: String,
    optional: true,
    label: 'tovarSquereColor',
  },
     tovarSquereColor2: {
    type: String,
    optional: true,
    label: 'tovarSquereColor2',
  },
     tovarSquereColor3: {
    type: String,
    optional: true,
    label: 'tovarSquereColor3',
  },
     tovarSquereColor4: {
    type: String,
    optional: true,
    label: 'tovarSquereColor4',
  },
     tovarSquereColor5: {
    type: String,
    optional: true,
    label: 'tovarSquereColor5',
  },
     tovarSquereColor6: {
    type: String,
    optional: true,
    label: 'tovarSquereColor6',
  },
     tovarSquereColor7: {
    type: String,
    optional: true,
    label: 'tovarSquereColor7',
  },
     tovarSquereColor8: {
    type: String,
    optional: true,
    label: 'tovarSquereColor8',
  },
     tovarSquereColor9: {
    type: String,
    optional: true,
    label: 'tovarSquereColor9',
  },
     tovarSquereColor10: {
    type: String,
    optional: true,
    label: 'tovarSquereColor10',
  },
   hoverColor: {
    type: String,
    optional: true,
    label: 'hoverColor',
  },
     hoverColor2: {
    type: String,
    optional: true,
    label: 'hoverColor2',
  },
     hoverColor3: {
    type: String,
    optional: true,
    label: 'hoverColor3',
  },
     hoverColor4: {
    type: String,
    optional: true,
    label: 'hoverColor4',
  },
     hoverColor5: {
    type: String,
    optional: true,
    label: 'hoverColor5',
  },
     hoverColor6: {
    type: String,
    optional: true,
    label: 'hoverColor6',
  },
     hoverColor7: {
    type: String,
    optional: true,
    label: 'hoverColor7',
  },
     hoverColor8: {
    type: String,
    optional: true,
    label: 'hoverColor8',
  },
     hoverColor9: {
    type: String,
    optional: true,
    label: 'hoverColor9',
  },
     hoverColor10: {
    type: String,
    optional: true,
    label: 'hoverColor10',
  },
   color1: {
    type: String,
    optional: true,
    label: 'color1',
  },
     color2: {
    type: String,
    optional: true,
    label: 'color2',
  },
       color3: {
    type: String,
    optional: true,
    label: 'color3',
  },
       color4: {
    type: String,
    optional: true,
    label: 'color4',
  },
       color5: {
    type: String,
    optional: true,
    label: 'color5',
  },
       color6: {
    type: String,
    optional: true,
    label: 'color6',
  },
       color7: {
    type: String,
    optional: true,
    label: 'color7',
  },
       color8: {
    type: String,
    optional: true,
    label: 'color8',
  },
       color9: {
    type: String,
    optional: true,
    label: 'color9',
  },
       color10: {
    type: String,
    optional: true,
    label: 'color10',
  },
  sByst: {
    type: String,
    optional: true,
    label: 'SByst',
  },
  mByst: {
    type: String,
    optional: true,
    label: 'MByst',
  },
  lByst: {
    type: String,
    optional: true,
    label: 'LByst',
  },
  xsByst: {
    type: String,
    optional: true,
    label: 'XsByst',
  },
  xlByst: {
    type: String,
    optional: true,
    label: 'XLByst',
  },
  sTrysu: {
    type: String,
    optional: true,
    label: 'STrysu',
  },
  mTrysu: {
    type: String,
    optional: true,
    label: 'MTrysu',
  },
  lTrysu: {
    type: String,
    optional: true,
    label: 'LTrysu',
  },
  xsTrysu: {
    type: String,
    optional: true,
    label: 'XsTrysu',
  },
  xlTrysu: {
    type: String,
    optional: true,
    label: 'XLTrysu',
  },
    harName1: {
    type: String,
    optional: true,
    label: 'harName1',
  },
  har1: {
    type: String,
    optional: true,
    label: 'har1',
  },
    harName2: {
    type: String,
    optional: true,
    label: 'harName2',
  },
  har2: {
    type: String,
    optional: true,
    label: 'har2',
  },
      harName3: {
    type: String,
    optional: true,
    label: 'harName3',
  },
  har3: {
    type: String,
    optional: true,
    label: 'har3',
  },
      harName4: {
    type: String,
    optional: true,
    label: 'harName4',
  },
  har4: {
    type: String,
    optional: true,
    label: 'har4',
  },
      harName5: {
    type: String,
    optional: true,
    label: 'harName5',
  },
  har5: {
    type: String,
    optional: true,
    label: 'har5',
  },
      harName6: {
    type: String,
    optional: true,
    label: 'harName6',
  },
  har6: {
    type: String,
    optional: true,
    label: 'har6',
  },
      harName7: {
    type: String,
    optional: true,
    label: 'harName7',
  },
  har7: {
    type: String,
    optional: true,
    label: 'har7',
  },
      harName8: {
    type: String,
    optional: true,
    label: 'harName8',
  },
  har8: {
    type: String,
    optional: true,
    label: 'har8',
  },
        harName9: {
    type: String,
    optional: true,
    label: 'harName9',
  },
  har9: {
    type: String,
    optional: true,
    label: 'har9',
  },
        harName10: {
    type: String,
    optional: true,
    label: 'harName10',
  },
  har10: {
    type: String,
    optional: true,
    label: 'har10',
  },
  smallImg1: {
    type: String,
    optional: true,
    label: 'Img1',
  },
   smallImg2: {
    type: String,
    optional: true,
    label: 'Img2',
  },
   smallImg3: {
    type: String,
    optional: true,
    label: 'Img3',
  },
   smallImg4: {
    type: String,
    optional: true,
    label: 'Img4',
  },
   smallImg5: {
    type: String,
    optional: true,
    label: 'Img5',
  },
  smallImg6: {
    type: String,
    optional: true,
    label: 'Img6',
  },
   tableSize: {
    type: String,
    optional: true,
    label: 'tableSize',
  }


}));


Orders = new orion.collection('Orders', {
  singularName: 'Orders', // The name of one of these items
  pluralName: 'Orders', // The name of more than one of these items
  link: {
    title: 'Orders' 
  },

  tabular: {

    columns: [
       { 
        data: "header", 
        title: "model" 
      },
       { 
        data: "firma", 
        title: "brend" 
      },
       { 
        data: "price", 
        title: "price" 
      },
       {
        data: "sizeByst", 
        title: "sizeByst" 
      },
       { 
        data: "sizeTrysu", 
        title: "sizeTrysu" 
      },
       { 
        data: "quantity", 
        title: "quantity" 
      },
      { 
        data: "color", 
        title: "color" 
      },
      { 
        data: "name", 
        title: "name" 
      },
      { 
        data: "number", 
        title: "number" 
      },
      { 
        data: "date", 
        title: "date"
      },
      { 
        data: "obrabotan", 
        title: "obrabotan"
      },
      { 
        salle: "salled?", 
        title: "salled?"
      }
    ]
  }
});

Orders.attachSchema(new SimpleSchema({
   header: {
    type: String,
    optional: false,
    label: 'Model',
  },
   firma: {
    type: String,
    optional: true,
    label: 'firma',
  },
   price: {
    type: String,
    optional: true,
    label: 'price',
  },
  sizeByst: {
    type: String,
    optional: true,
    label: 'sizeByst',
  },
  sizeTrysu: {
    type: String,
    optional: true,
    label: 'sizeTrysu',
  },
   quantity: {
    type: String,
    optional: true,
    label: 'quantity',
  },
  color: {
    type: String,
    optional: true,
    label: 'color',
  },
   name: {
    type: String,
    optional: true,
    label: 'name',
    max: 20,
  },
   number: {
    type: String,
    optional: false,
    label: 'number',
    max: 20,
  },
   date: {
    type: String,
    optional: false,
    label: 'date',
  },
   obrabotan: {
    type: String,
    optional: false,
    label: 'obrabotan',
  },
   salle: {
    type: String,
    optional: false,
    label: 'salled?',
  }
}));


Calls = new orion.collection('Calls', {
  singularName: 'Calls', // The name of one of these items
  pluralName: 'Calls', // The name of more than one of these items
  link: {
    title: 'Calls' 
  },

  tabular: {

    columns: [
       { 
        data: "name", 
        title: "name" 
      },
       { 
        data: "number", 
        title: "number" 
      },
       { 
        data: "email", 
        title: "email" 
      },
      { 
        data: "date", 
        title: "date"
      }
    ]
  }
});

Calls.attachSchema(new SimpleSchema({
   name: {
    type: String,
    optional: false,
    label: 'name',
  },
   number: {
    type: String,
    optional: false,
    label: 'number',
  },
   email: {
    type: String,
    optional: true,
    label: 'email',
  },
   date: {
    type: String,
    optional: false,
    label: 'date',
  }
}));


OrdersCart = new orion.collection('OrdersCart', {
  singularName: 'OrdersCart', // The name of one of these items
  pluralName: 'OrdersCart', // The name of more than one of these items
  link: {
    title: 'OrdersCart' 
  },

  tabular: {

    columns: [
       { 
        data: "Orders", 
        title: "Orders" 
      }
    ]
  }
});

OrdersCart.attachSchema(new SimpleSchema({
   Orders: {
    type: String,
    optional: false,
    label: 'Orders',
  }
}));