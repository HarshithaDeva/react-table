import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const data = [
  {id: 1, bname: 'Malgudi Days', year: '1943',aname:"R.K.Narayan",age:"94"},
  {id: 2, bname: 'Wings of Fire', year: '1999',aname:"A.P.J.Abdul Kalam",age:"64"},
  {id: 3, bname: 'The White Tiger', year: '2008',aname:"Aravind Adiga",age:"46"},
  {id: 4, bname: 'You Can Win', year: '1998',aname:"Shiv Khera",age:"59"},
  {id: 5, bname: 'Skyfire', year: '2012',aname:"Aroon Raman",age:"57"},
  {id: 6, bname: 'The Four Winds', year: '2021',aname:"Kristin Hannah",age:"60"},
  {id: 7, bname: 'The Last Samurai', year: '2000',aname:"Helen DeWitt",age:"64"},
  {id: 8, bname: 'Never Let Me Go', year: '2005',aname:"Kazuo Ishiguro",age:"66"},
  {id: 9, bname: 'Lives Other Than My Own', year: '2009',aname:"Emmanuel Carrère",age:"63"},
  {id: 10, bname: 'The Amber Spyglass', year: '2000',aname:"Philip Pullman",age:"74"},
  {id: 11, bname: 'The Room on the roof', year: '1956',aname:"Ruskin Bond",age:"87"},
  {id: 12, bname: 'The Inheritance of Loss', year: '2006',aname:"Kiran Desai",age:"49"},
  {id: 13, bname: 'A Suitable Boy', year: '1993',aname:"Vikram Seth",age:"74"},
  {id: 14, bname: 'Malgudi Days', year: '1943',aname:"R.K.Narayan",age:"94"},
  {id: 15, bname: 'Wings of Fire', year: '1999',aname:"A.P.J.Abdul Kalam",age:"64"},
  {id: 16, bname: 'The White Tiger', year: '2008',aname:"Aravind Adiga",age:"46"},
  {id: 17, bname: 'You Can Win', year: '1998',aname:"Shiv Khera",age:"59"},
  {id: 18, bname: 'Skyfire', year: '2012',aname:"Aroon Raman",age:"57"},
  {id: 19, bname: 'The Four Winds', year: '2021',aname:"Kristin Hannah",age:"60"},
  {id: 20, bname: 'The Last Samurai', year: '2000',aname:"Helen DeWitt",age:"64"},
  {id: 21, bname: 'Never Let Me Go', year: '2005',aname:"Kazuo Ishiguro",age:"66"},
  {id: 22, bname: 'Lives Other Than My Own', year: '2009',aname:"Emmanuel Carrère",age:"63"},
  {id: 23, bname: 'The Amber Spyglass', year: '2000',aname:"Philip Pullman",age:"74"},
  {id: 24, bname: 'The Room on the roof', year: '1956',aname:"Ruskin Bond",age:"87"},
  {id: 25, bname: 'The Inheritance of Loss', year: '2006',aname:"Kiran Desai",age:"49"},
  {id: 26, bname: 'A Suitable Boy', year: '1993',aname:"Vikram Seth",age:"74"},
  {id: 27, bname: 'You Can Win', year: '1998',aname:"Shiv Khera",age:"59"},
  {id: 28, bname: 'Skyfire', year: '2012',aname:"Aroon Raman",age:"57"},
  {id: 29, bname: 'The Four Winds', year: '2021',aname:"Kristin Hannah",age:"60"},
  {id: 30, bname: 'The Last Samurai', year: '2000',aname:"Helen DeWitt",age:"64"},
  {id: 31, bname: 'Never Let Me Go', year: '2005',aname:"Kazuo Ishiguro",age:"66"},
  {id: 32, bname: 'Lives Other Than My Own', year: '2009',aname:"Emmanuel Carrère",age:"63"},
  {id: 33, bname: 'The Amber Spyglass', year: '2000',aname:"Philip Pullman",age:"74"},
  {id: 34, bname: 'The Room on the roof', year: '1956',aname:"Ruskin Bond",age:"87"},
  {id: 35, bname: 'The Inheritance of Loss', year: '2006',aname:"Kiran Desai",age:"49"},
  {id: 36, bname: 'A Suitable Boy', year: '1993',aname:"Vikram Seth",age:"74"},
];
const options = {
  page: 1,
  sizePerPage: 7,
  nextPageText: '>',
  prePageText: '<',
  showTotal: true
};
const columns = [{
  dataField: 'id',
  text: 'Book ID',
  align:"center",
  style:{backgroundColor:"#6ebfb5",border:"3px solid white"},
  headerStyle: (colum, colIndex) => {
    return { width: '10%', textAlign: 'center'  , backgroundColor:"#ffd5cd",border:"3px solid white"};}
},{
  dataField: 'bname',
  text: 'Book name',
  align:"center",
  style:{backgroundColor:"#6ebfb5",border:"3px solid white"},
  headerStyle: (colum, colIndex) => {
    return { width: '30%', textAlign: 'center' , backgroundColor:"#ffd5cd" ,border:"3px solid white"};}
},{
  dataField: 'year',
  text: 'Year',
  sort:true,
  align:"center",
  style:{backgroundColor:"#6ebfb5",border:"3px solid white"},
  headerStyle: (colum, colIndex) => {
    return { width: '15%', textAlign: 'center' , backgroundColor:"#ffd5cd",border:"3px solid white"};}
},{
  dataField: 'aname',
  text: 'Author Name',
  align:"center",
  style:{backgroundColor:"#6ebfb5",border:"3px solid white"},
  headerStyle: (colum, colIndex) => {
    return { width: '30%', textAlign: 'center' , backgroundColor:"#ffd5cd" ,border:"3px solid white"};}
}, {
  dataField: 'age',
  text: 'Author age',
  align:"center",
  sort:true,
  style:{backgroundColor:"#6ebfb5",border:"3px solid white"},
  headerStyle: (colum, colIndex) => {
    return { width: '15%', textAlign: 'center'  , backgroundColor:"#ffd5cd",border:"3px solid white"};}
}];
const expandRow = {
  renderer: (row, rowIndex) => (
    <div>
      <p>{ `This Book is "${row.bname}" belongs to Id.no ${row.id} written by author ${row.aname} in the year ${row.year}` }</p>
    </div>
  )
};

class App extends React.Component {
  
  render() {
    return (
      
      <div className="App"style={{backgroundColor:"#caf7e3"}}>
        <h2 className="Table-header" style={{textAlign:"center"}}>My Library</h2>
         
        <BootstrapTable
        striped
        hover
        condensed
        
         keyField='id' data={ data } columns={ columns } 
         pagination={ paginationFactory(options) }
         expandRow={ expandRow }/>
         
      </div>
    );
  }
}
export default App;
