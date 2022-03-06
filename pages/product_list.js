import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// export default function ProductList() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Service Requests</title>
//         <meta name="description" content="List of all services" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className="text-3xl font-bold underline">
//           Hello world!
//         </h1>

//         <p className={styles.description}>
//           Powered by a BackEnd Golang REST API - That monitors various service requests
//           {/* Get started by editing {' '} */}
//         </p>

//       </main>

//     </div>
//   )
// }

class ProductList extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            error: null,
            items: [],
            isLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("http://local.services.com:5000/product/5")
        .then(response => response.json())
        .then(data => console.log(data));
        // .then((res) => res.json())
        // .then((jsonres) => {
        //     this.setState({
        //         items: jsonres,
        //         isLoaded: true
        //     });
        // }
        // (error) => {
        //     this.setState({
        //         isLoaded: true,
        //         error
        //     });
        // })
    }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        }else if (!isLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>  {
                items.map((item) => ( 
                <ol key = { item.id } >
                    Id: { item.id }, 
                    Title: { item.title },
                    Supplier: { item.supplier }, 
                    Price: { item.price }, 
                    Mode of payment: { item.mode_of_payment }, 
                    Transaction id: { item.transaction_id }, 
                    Created at: { item.created_at },
                    Updated at: { item.updated_at }  
                    </ol>
                ))
            }
        </div>
    );
}
}
   
export default ProductList;