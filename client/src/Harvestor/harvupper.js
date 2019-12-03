import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Harv from './harv'
import axios from "axios";


let snippets4;
class harvupper extends Component {
    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.Test2 = this.Test2.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
       //     TotPrice: '',
        rowDD:{},

            columnDefs: [{
                headerName: "group2", field: "group2", checkboxSelection:true, sortable: true, filter: true
            },

                //    {
                //  headerName: "Model", field: "model", sortable: true, filter: true
                //},

                {
                    headerName: "Price", field: "price", sortable: true, filter: true
                }],


            rowData2: [
                {
                car1:{
                    group2: "sr_acc", model: "Celica1", price: 100
                }},
                {
                    car2:{
                        group2: "sr_acc", model: "Celica1", price: 100
                    }}


        ],



            rowData: [{
                    group1: "GOV", group2: "SR_HEA", model: "St Jos", price: 200
            },
                {
                    group1: "GOV", group2: "SR_HEA", model: "St Pats", price: 200
            },
                {
                    group1: "JAP",  group2: "Nissan", model: "Sunny", price: 200
                },
                {
                    group1: "JAP", group2: "Nissan", model: "Cherry", price: 200
                },

                {
                    group1: "JAP",  group2: "Toyota", model: "Celica", price: 200
                },
                {
                    group1: "JAP", group2: "Toyota", model: "Prius", price: 200
                },


                {
                    group1: "EUR", group2: "Renault", model: "Mondeo", price: 32000
            }, {
                    group1: "EUR", group2: "Renault", model: "Boxter", price: 72000

            }],




        };

    }

    onChange(e) {
        console.log("NameXXX",e.target.name);
        console.log("ValXXX",e.target.value);
        this.setState({ [e.target.name]: e.target.value });
        this.state.RowDD[e.target.name].price= e.target.value;
        this.totaller();
        console.log("state",this.state);

    }

totaller() {
    let totprice = 0;
    if (this.state.RowDD !=null) {
        //for (let key of this.state.RowDD) {
        for (var key in this.state.RowDD) {

            console.log("tpricein", this.state.RowDD[key].price);
            totprice = Number(totprice + parseInt(this.state.RowDD[key].price));
            this.setState({TotPrice: totprice});

        }
        console.log("tpriceout", this.state.TotPrice);
    }
}
    componentDidMount() {
        axios.get('/api/tickets/test')
            .then(res =>console.log('fuckffss',res));


        fetch('/api/ticket/test')
            .then(response => response.text())
            .then(text => console.log('Holyffss',text));

        var text, parser, xmlDoc;
        parser = new DOMParser();
        fetch('/harv/test')
      // fetch('http://192.168.50.26:8080/DATA')
            .then(response => response.text())
           // .then(textx => console.log('ffsharv',textx))
            //.then(texty => console.log('ffsharvxx',texty))
            .then( text =>parser.parseFromString(text,"text/xml") )
            //.then(result => console.log('shark',result) )
            .then(xml => this.xmlToJson(xml))
            .then(result => console.log('shark',result))
        ;




        var rowDataDict = [];
        var rowDataDict3 = [];
        var rowDataDict4 = [];
        var rowDataDict5 = [];

        //var rowDataDict6 = Array(4).fill(Array(4));

 //       var rowDataDict6 =[[]];
        var rowDataDict7 = {};
        var rowDataDict6 = [];
        rowDataDict6['x']={};

        //var rowDataDict2 = [[[]]];
        //var rowDataDict3={};
     //   var rowDataDict3 = Array(10).fill(Array(10))

        for (var i = 0; i < this.state.rowData.length; i++) {
            rowDataDict[this.state.rowData[i].group2] = this.state.rowData[i];
            console.log("dick",rowDataDict);
           ///// rowDataDict6[this.state.rowData[i].group2]={};
            rowDataDict6[this.state.rowData[i].group2]=[];
            rowDataDict7[this.state.rowData[i].group1]=[];
        }

       for (var j = 0; j < this.state.rowData.length; j++) {
console.log (this.state.rowData[j].group1);
            console.log (this.state.rowData[j].group2);
            console.log (this.state.rowData[j].model);

            rowDataDict3[this.state.rowData[j].model]= this.state.rowData[j];
            console.log("dick3",rowDataDict3);

            console.log("dick4" ,rowDataDict3[this.state.rowData[j].model]);

            //  rowDataDict4[this.state.rowData[j].group2][this.state.rowData[j].model] ==    rowDataDict3[this.state.rowData[j].model];
            //rowDataDict4[this.state.rowData[j].group2] = rowDataDict3[this.state.rowData[j].model];
            //console.log("dick4",rowDataDict4);

        //    rowDataDict3[this.state.rowData[j].group1][this.state.rowData[j].group2]== this.state.rowData[j];

             // rowDataDict5[this.state.rowData[j].group1][this.state.rowData[j].group2][this.state.rowData[j].model] = this.state.rowData[j];
            //rowDataDict[this.state.rowData[i].group2] = this.state.rowData[i];
        /////////     rowDataDict6[this.state.rowData[j].group2][this.state.rowData[j].model] = this.state.rowData[j];

         //   rowDataDict6[this.state.rowData[j].group2].push(rowDataDict3[this.state.rowData[j].model]);
          //  rowDataDict6[this.state.rowData[j].group2].push(rowDataDict3[this.state.rowData[j].model]);
           //rowDataDict6[this.state.rowData[j].group2][this.state.rowData[j].model]='1';
       //////////////////////    rowDataDict6[this.state.rowData[j].group2]=[];
       //   rowDataDict6[this.state.rowData[j].group2][this.state.rowData[j].model]='1';
           rowDataDict6[this.state.rowData[j].group2].push(this.state.rowData[j].model);
          // var obj = {};
         //  obj(rowDataDict6[this.state.rowData[j].group2])={};

           ///////////////////////////////////rowDataDict7[this.state.rowData[j].group1].push(rowDataDict6[this.state.rowData[j].group2]);
           rowDataDict7[this.state.rowData[j].group1]=rowDataDict6[this.state.rowData[j].group2];


          /// rowDataDict7[this.state.rowData[j].group1].push(obj(rowDataDict6[this.state.rowData[j].group2]));

          ///// rowDataDict6['x']['y']='1';
        ///   var thing=rowDataDict6[this.state.rowData[j].group2]['x'];
           ///thing.push(this.state.rowData[j].model);

            //  rowDataDict3[this.state.rowData[j].group2]= this.state.rowData[j];
            console.log("you dick",rowDataDict6);

        }
       console.log("you dick2",rowDataDict6);
        console.log("you dick3",rowDataDict7);
/*let obj={};

obj=rowDataDict6;
        obj.map(sweetItem => {
        //rowDataDict6.map(sweetItem => {
            console.log ("sweetness",sweetItem)
        });
*/
        rowDataDict6.forEach(this.myFunction);
        rowDataDict6.forEach(element => console.log("element",element));
///this is working
        for(var update in rowDataDict6) {
            //unfortunatly dirty solution now will be

            console.log("uspdate",update,rowDataDict6[update]);
        }


        //obj.forEach(this.myFunction);
        /*



                for (var k = 0; k < rowDataDict6.length; k++) {

                    rowDataDict7[rowDataDict6.group1].push(this.state.rowData[j].model);



                }
          */

var car= rowDataDict["Ford"];
console.log("Car",car);

        this.setState({RowDD:rowDataDict});
this.totaller();

    }
    myFunction(item, index) {
        console.log("item",item);
    }



    handleClick(){

        this.setState({});

    }
    Test2(){
        this.setState({});


    }

    // Changes XML to JSON
     xmlToJson(xml) {

        // Create the return object
        var obj = {};

        if (xml.nodeType == 1) { // element
            // do attributes
            if (xml.attributes.length > 0) {
                obj["@attributes"] = {};
                for (var j = 0; j < xml.attributes.length; j++) {
                    var attribute = xml.attributes.item(j);
                    obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                }
            }
        } else if (xml.nodeType == 3) { // text
            obj = xml.nodeValue;
        }

        // do children
        if (xml.hasChildNodes()) {
            for(var i = 0; i < xml.childNodes.length; i++) {
                var item = xml.childNodes.item(i);
                var nodeName = item.nodeName;
                if (typeof(obj[nodeName]) == "undefined") {
                    obj[nodeName] = this.xmlToJson(item);
                } else {
                    if (typeof(obj[nodeName].push) == "undefined") {
                        var old = obj[nodeName];
                        obj[nodeName] = [];
                        obj[nodeName].push(old);
                    }
                    obj[nodeName].push(this.xmlToJson(item));
                }
            }
        }
        return obj;
    };






    render() {
        console.log("RowData",this.state.rowData);
        const snippets= this.state.rowData.map((anObjectMapped, index) => {
            console.log("obm",anObjectMapped.price);
            return(
          <div>
             not in harv {anObjectMapped.price}
              <Harv name={anObjectMapped.group2} price={anObjectMapped.price} value={anObjectMapped.model} />
                after
          </div>
            );

        });

    const snippets2= this.state.rowData2.map((anObjectMapped, index) => {
        console.log("obm2",index);
        console.log("obm3",anObjectMapped.car1);
        return(
             <div>
                 {/*    not in harvxx {anObjectMapped[index].price}
                <Harv name={anObjectMapped[index].group2} price={anObjectMapped[index].price} value={anObjectMapped[index].model} />
                afterxx
                */}
            </div>

        );

    });

        console.log("ddx",this.state.RowDD);
        if (this.state.RowDD !=null){
             snippets4=[];

            for (var key in this.state.RowDD)
            {
                console.log("ontheinside",this.state.RowDD[key]);
snippets4.push(

    <Harv name={this.state.RowDD[key].group2} price={this.state.RowDD[key].price} value={this.state.RowDD[key].model} onChange={this.onChange} />





)
            }
            snippets4.push(
            <Harv name={'total'} price={this.state.TotPrice} value={this.state.TotPrice}  />

            )


        }




        return (
            <div>

                <a href="#" onClick={this.handleClick}>Just Do this</a>
                {snippets}
                {snippets2}
                hello
                {snippets4}
    <Harv name={'total'} price={this.state.TotPrice} value={this.state.TotPrice}  />
            </div>
        );
    }

}

export default harvupper;

