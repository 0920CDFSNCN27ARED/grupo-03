import './App.css';
import SideMenu from "./components/side-menu/SideMenu";
import Header from "./components/header/Header";
import DataCardSmall from "./components/data-cards/data-card-small/DataCardSmall";
import DataCardBig from "./components/data-cards/data-card-big/DataCardBig";
import CategoryCard from "./components/category-card/CategoryCard";
import Footer from "./components/footer/Footer";
import DataCardTable from './components/data-cards/Data-card-table/DataCardTable';

function App() {
  const smallCardsValue = [
      {
        title:"Products in Data Base",
        icon :" fa-clipboard-list" ,
        value: "135",
        color: "primary", 
      },
      {title:"Amount in products",
       icon :" fa-dollar-sign" ,
       value: "$546.456", 
       color: "success" ,

      },
      {
        title:"Users quantity" ,
        icon :" fa-user-check",
         value: "38" ,
         color: "warning",
      },
    ]
 
  return (

   <div className="App"> 
      <div id="wrapper">
           <SideMenu/>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header/>
              <div class="container-fluid">
                  <div class="d-sm-flex align-items-center justify-content-between mb-4">
						         <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
				        	</div>
                  <div class="row">
                    
                  { smallCardsValue.map((elem,index)=>{
                    return <DataCardSmall key={index} title={elem.title} icon={elem.icon} value={elem.value} color={elem.color}/>;
                  })
                  }

                   </div>
                   <div class="row">
                     <DataCardBig/>

                     <CategoryCard/>
                   </div>
                   <h1 class="h3 mb-2 text-gray-800">All the products in the Database</h1>
                   <DataCardTable/>

                </div>

            <Footer/>
          </div>

        </div>



      </div>
    </div>
   );
}

export default App;
