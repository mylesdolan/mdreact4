import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Harv from './harv'
import Harv2 from './harv2'
import axios from "axios";
import qs from 'query-string'


let snippets4;

class harvupper extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.Test2 = this.Test2.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onChange2 = this.onChange2.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        var xmlDoc = document.implementation.createDocument(null, "books");
        console.log("books", xmlDoc);

        this.state = {
            //     TotPrice: '',
            TheJson: {},
            TheJson2: {},
            rowDD: {},

            columnDefs: [{
                headerName: "group2", field: "group2", checkboxSelection: true, sortable: true, filter: true
            },

                //    {
                //  headerName: "Model", field: "model", sortable: true, filter: true
                //},

                {
                    headerName: "Price", field: "price", sortable: true, filter: true
                }],


            rowData2: [
                {
                    car1: {
                        group2: "sr_acc", model: "Celica1", price: 100
                    }
                },
                {
                    car2: {
                        group2: "sr_acc", model: "Celica1", price: 100
                    }
                }


            ],


            rowData: [{
                group1: "GOV", group2: "SR_HEA", model: "St Jos", price: 200
            },
                {
                    group1: "GOV", group2: "SR_HEA", model: "St Pats", price: 200
                },
                {
                    group1: "JAP", group2: "Nissan", model: "Sunny", price: 200
                },
                {
                    group1: "JAP", group2: "Nissan", model: "Cherry", price: 200
                },

                {
                    group1: "JAP", group2: "Toyota", model: "Celica", price: 200
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

    onSubmit(e) {
        e.preventDefault();

    }


    onChange(e) {
        console.log("NameXXX", e.target.name);
        console.log("ValXXX", e.target.value);
       // this.setState({[e.target.name]: e.target.value});
        this.state.RowDD[e.target.name].price = e.target.value;
      this.totaller();
        console.log("state", this.state);

    }

    onChange2(e) {
        console.log("NameXXX2", e.target.name);
        console.log("ValXXX2", e.target.value);
        console.log("ValXXX2", e.target.id);
        //this.setState({[e.target.name]: e.target.value});
        //this.state.RowDD[e.target.name].price = e.target.value;
        //this.totaller();
        console.log("state", this.state);
       // this.state.TheJson2.result.Data.Return[0].BalanceSheet[0].DataItem[20].Total[0]['_']= e.target.value;
        console.log("state2",this.state.TheJson2.result.Data.Return[0].RecPay[0].DataItem[e.target.id].Total[0]['_']);
        this.state.TheJson2.result.Data.Return[0].RecPay[0].DataItem[e.target.id].Total[0]['_']= e.target.value;
              this.setState( {xx: 'ss'});
        console.log("state", this.state);
       // this.totaller();

    //    let someProperty = {...this.state.TheJson2.result.Data.Return[0].RecPay[0].DataItem[e.target.id].Total[0]};
//someProperty.['_']=e.target.value;
      //  this.setState( { [ this.state.TheJson2.result.Data.Return[0].RecPay[0].DataItem[e.target.id].Total[0]['_']] : e.target.value });
       // this.setState( {xxrt: 'ss'});
        console.log("statej", this.state);
//

    }



    totaller() {
        let totprice = 0;
        if (this.state.RowDD != null) {
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
            .then(res => console.log('fuckffss', res));


        fetch('/api/ticket/test')
            .then(response => response.text())
            .then(text => console.log('Holyffss', text));


        axios.get('/xmltoJson')
            .then(result => {
                this.setState({TheJson2: result.data})
            })
            //.then( response =>{console.log("xxxxxxxxxxxxxxxxxxxxxNOTtwit",response.data)   })
            .catch((err) => {
                console.log("err", err)
            })
        ;










        fetch('/xmltoJson')
        // .then(response => JSON.parse(response))
            .then(objx => console.log('ffsharvJawsobj', objx));
        //.then(result => this.setState({TheJson2: JSON.parse(result)}));
        // .then(result => this.setState({TheJson2: result}));

        ////  .then(response => response.text())
        ///   .then(textx => console.log('ffsharvJaws',textx));
        // .then(result => (console.log("maybe",result.data)));
        //  .then(result => this.setState({TheJson2: result}));

        var text, parser, xmlDoc;
        parser = new DOMParser();
        fetch('/harv/test')
        // fetch('http://192.168.50.26:8080/DATA')
            .then(response => response.text())
            // .then(textx => console.log('ffsharv',textx))
            //.then(texty => console.log('ffsharvxx',texty))
            .then(text => parser.parseFromString(text, "text/xml"))
            //.then(result => console.log('shark',result) )
            .then(xml => this.xmlToJson(xml))
            .then(result => this.setState({TheJson: result}))
            // .then(result => console.log('shark',result))
            .then(console.log('shark', this.state.TheJson))

        ;


        // this.setState({thejson: TheJson});


        var rowDataDict = [];
        var rowDataDict3 = [];
        var rowDataDict4 = [];
        var rowDataDict5 = [];

        //var rowDataDict6 = Array(4).fill(Array(4));

        //       var rowDataDict6 =[[]];
        var rowDataDict7 = {};
        var rowDataDict6 = [];
        rowDataDict6['x'] = {};

        //var rowDataDict2 = [[[]]];
        //var rowDataDict3={};
        //   var rowDataDict3 = Array(10).fill(Array(10))

        for (var i = 0; i < this.state.rowData.length; i++) {
            rowDataDict[this.state.rowData[i].group2] = this.state.rowData[i];
            console.log("dick", rowDataDict);
            ///// rowDataDict6[this.state.rowData[i].group2]={};
            rowDataDict6[this.state.rowData[i].group2] = [];
            rowDataDict7[this.state.rowData[i].group1] = [];
        }

        for (var j = 0; j < this.state.rowData.length; j++) {
            console.log(this.state.rowData[j].group1);
            console.log(this.state.rowData[j].group2);
            console.log(this.state.rowData[j].model);

            rowDataDict3[this.state.rowData[j].model] = this.state.rowData[j];
            console.log("dick3", rowDataDict3);

            console.log("dick4", rowDataDict3[this.state.rowData[j].model]);

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
            rowDataDict7[this.state.rowData[j].group1] = rowDataDict6[this.state.rowData[j].group2];


            /// rowDataDict7[this.state.rowData[j].group1].push(obj(rowDataDict6[this.state.rowData[j].group2]));

            ///// rowDataDict6['x']['y']='1';
            ///   var thing=rowDataDict6[this.state.rowData[j].group2]['x'];
            ///thing.push(this.state.rowData[j].model);

            //  rowDataDict3[this.state.rowData[j].group2]= this.state.rowData[j];
            console.log("you dick", rowDataDict6);

        }
        console.log("you dick2", rowDataDict6);
        console.log("you dick3", rowDataDict7);
        /*let obj={};

        obj=rowDataDict6;
                obj.map(sweetItem => {
                //rowDataDict6.map(sweetItem => {
                    console.log ("sweetness",sweetItem)
                });
        */
        rowDataDict6.forEach(this.myFunction);
        rowDataDict6.forEach(element => console.log("element", element));
        ///this is working
        for (var update in rowDataDict6) {
            //unfortunatly dirty solution now will be

            console.log("uspdate", update, rowDataDict6[update]);
        }


        //obj.forEach(this.myFunction);
        /*



                for (var k = 0; k < rowDataDict6.length; k++) {

                    rowDataDict7[rowDataDict6.group1].push(this.state.rowData[j].model);



                }
          */

        var car = rowDataDict["Ford"];
        console.log("Car", car);

        this.setState({RowDD: rowDataDict});
        this.totaller();

    }

    myFunction(item, index) {
        console.log("item", item);
    }


    handleClick() {

        this.setState({});

    }

    Test2() {
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
            for (var i = 0; i < xml.childNodes.length; i++) {
                var item = xml.childNodes.item(i);
                var nodeName = item.nodeName;
                if (typeof (obj[nodeName]) == "undefined") {
                    obj[nodeName] = this.xmlToJson(item);
                } else {
                    if (typeof (obj[nodeName].push) == "undefined") {
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

    onSubmit(e) {
        e.preventDefault();
        const requestBody = {
            weeName: this.state.TheJson2
        };
        /*
                    const config = {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'

                        }
                    };
        */
        console.log('im here wee fella');

        axios.post('/xmltoJsonUpload',requestBody)
            .then(res => {
                console.log("resssy", res);
            })


    }

    totaller2() {
        let totprice = 0;
        if (this.state.RowDD != null) {
            //for (let key of this.state.RowDD) {
            for (var key in this.state.RowDD) {

                console.log("tpricein", this.state.RowDD[key].price);
                totprice = Number(totprice + parseInt(this.state.RowDD[key].price));
                this.setState({TotPrice: totprice});

            }
            console.log("tpriceout", this.state.TotPrice);
        }
    }




        render() {
        console.log("RdataTheJson", this.state.TheJson);
        console.log("trythis", this.state.TheJson.Data);
        console.log("trythis2", this.state.TheJson2);
        if (this.state.TheJson.Data != null) {
            console.log("trythis", this.state.TheJson.Data.Return.BalanceSheet.DataItem)
        }
        ;
        if (this.state.TheJson2.result != null)
        {
            //  console.log("trythisHOLD", this.state.TheJson2.result.Data.Return.BalanceSheet.DataItem)
            console.log("trythisHOLD", this.state.TheJson2.result.Data.Return[0].BalanceSheet[0].DataItem[20].Total[0]['_']);
            this.state.TheJson2.result.Data.Return[0].BalanceSheet[0].DataItem[20].Total[0]['_'] = '777';
            const x = this.state.TheJson2.result.Data.Return[0].BalanceSheet[0].DataItem[20].Total[0]['_'];
            console.log("trythisHOLD2", this.state.TheJson2.result.Data.Return[0].BalanceSheet[0].DataItem[20].Total[0]['_']);
            // this.state.TheJson2.result.Data.Return[0].BalanceSheet[0].DataItem[20].Total[0]['_']
            //   console.log("trythisHOLD", this.state.TheJson2['Data']);


            const requestBody = {
                weeName: this.state.TheJson2
            };
/*
            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'

                }
            };
*/
             console.log('im here wee fella');
/*Removing for now Works a treat though
            axios.post('/xmltoJsonUpload',requestBody)
                .then(res => {
                    console.log("resssy", res);
                })
                //res =>{ history.push('/Insta')})
                .catch(err => {
                    console.log("wee error");

                });

*/
/*
//axios.post('/api/insta/postname',weeName)
            axios.post('/xmltoJsonUpload', qs.stringify(requestBody), config)
                .then(res => {
                    console.log("resssy", res);
                })
                //res =>{ history.push('/Insta')})
                .catch(err => {
                    console.log("wee error");
                    //  dispatch({
                    //    type: GET_ERRORS,
                    //   payload: err.response.data
                    //})
                });

*/
        }
        ;


        //this.state.TheJson2.result.Data.Return[0].BalanceSheet[0].DataItem[20].Total[0]['_'] = '777';

        const snippets6 =
            //
            //
            this.state.TheJson2.result ?  this.state.TheJson2.result.Data.Return[0].RecPay[0].DataItem.map((anObjectMapped, index) => {
                console.log("obmxx6", anObjectMapped['$'].name);
                console.log("obmxx7", anObjectMapped.Restricted[0]['_']);
                console.log("obmxx8", anObjectMapped.Unrestricted[0]['_']);
                console.log("obmxx9", anObjectMapped.Endowment[0]['_']);
                console.log("obmxx10", anObjectMapped.Designated[0]['_']);
                console.log("obmxx11", anObjectMapped.Total[0]['_']);
                console.log("obmxx12", anObjectMapped.PrevYear[0]['_']);
                    console.log("obmxx15", index);
                let Name=anObjectMapped['$'].name;
                let Restricted=anObjectMapped.Restricted[0]['_'];
                    let Unrestricted=anObjectMapped.Unrestricted[0]['_'];
                    let Endowment=anObjectMapped.Endowment[0]['_'];
                    let Designated=anObjectMapped.Designated[0]['_'];
                    let Total=anObjectMapped.Total[0]['_'];
                    let PrevYear=anObjectMapped.PrevYear[0]['_'];

                console.log("obmxx13", anObjectMapped);
                    return (
                        <div>
                            {/*    Harv LINE {Name} {Restricted} {Unrestricted}{Endowment}{Designated}{Total}{PrevYear} */}
                            <Harv2 name={Name}
                                   Restricted={Restricted}
                                   Unrestricted={Unrestricted}
                                Endowment={Endowment}
                                Designated={Designated}
                                Total={Total}
                                PrevYear={PrevYear}
                                Index={index}
                                   onChange={this.onChange2}/>

                        </div>
                    );

    })



                : null;









        //This uses harv.js on serverside and the xmltojson in this file to convert the json.
        //  const snippets5 = this.state.TheJson.Data.Return.BalanceSheet.DataItem.map((anObjectMapped, index) => {
        let totalreceipt = 0;
        const snippets5 = this.state.TheJson.Data ? this.state.TheJson.Data.Return.BalanceSheet.DataItem.map((anObjectMapped, index) => {

                //  console.log("obmxx", anObjectMapped.Total.'#text');
                console.log("obmxx", anObjectMapped.Total['@attributes']);
                console.log("obmxx", anObjectMapped.Total['#text']);
                console.log("obmyy", anObjectMapped['@attributes'].name);
                let diddy = anObjectMapped.Total['#text'];
                let diddy3 = anObjectMapped.Total['#text'] ? parseInt(anObjectMapped.Total['#text']) : 0;
                let diddy2 = isNaN(parseInt(anObjectMapped.Total['#text'])) ? 0 : parseInt(anObjectMapped.Total);
                console.log("diddy", diddy);
                console.log("diddy2", diddy2);
                let diddyman = anObjectMapped['@attributes'].name;
                totalreceipt = Number(totalreceipt + parseInt(diddy2));
                console.log("tots", totalreceipt);
                return (
                    <div>
                        not in harv {diddyman} {diddy}
                    </div>
                );
            })

            : null;
        console.log("tots2", totalreceipt);
        if (snippets5 != null) {
            snippets5.push(
                <div>
                    Total {totalreceipt}
                </div>
            )
        }
        console.log("RowData", this.state.rowData);
        const snippets = this.state.rowData.map((anObjectMapped, index) => {
            console.log("obm", anObjectMapped.price);
            return (
                <div>
                    not in harv {anObjectMapped.price}
                    <Harv name={anObjectMapped.group2} price={anObjectMapped.price} value={anObjectMapped.model}/>
                    after
                </div>
            );

        });

        const snippets2 = this.state.rowData2.map((anObjectMapped, index) => {
            console.log("obm2", index);
            console.log("obm3", anObjectMapped.car1);
            return (
                <div>
                    {/*    not in harvxx {anObjectMapped[index].price}
                    <Harv name={anObjectMapped[index].group2} price={anObjectMapped[index].price} value={anObjectMapped[index].model} />
                    afterxx
                    */}
                </div>

            );

        });

        console.log("ddx", this.state.RowDD);
        if (this.state.RowDD != null) {
            snippets4 = [];

            for (var key in this.state.RowDD) {
                console.log("ontheinside", this.state.RowDD[key]);
                snippets4.push(
                    <Harv name={this.state.RowDD[key].group2} price={this.state.RowDD[key].price}
                          value={this.state.RowDD[key].model} onChange={this.onChange}/>
                )
            }
            snippets4.push(
                <Harv name={'total'} price={this.state.TotPrice} value={this.state.TotPrice}/>
            )


        }


        return (
            <div>

                <a href="#" onClick={this.handleClick}>Just Do this</a>
                {snippets}
                {snippets2}
                hello
                {snippets4}
                {/*   <Harv name={'total'} price={this.state.TotPrice} value={this.state.TotPrice}/>*/}
                hi the fck
                {snippets5}

                <form onSubmit={this.onSubmit}>
                hi the fckfck

                {snippets6}
                <input
                    type="submit"
                    value="Submit"
                    className="btn btn-info btn-block mt-4"
                />
                </form>
            </div>
        );
    }

}

export default harvupper;

