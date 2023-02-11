import style from "./PagesStyle.module.css";
import { Helmet } from "react-helmet-async";
import { ProductComponent } from "../Components/ProductComponent";

export const Product = () => {
    return (
        <>
            <Helmet>
                <title>Halaman Produk</title>
            </Helmet>
            <div className={style.page}>
                <section>
                    <h1>Daftar Produk</h1>
                    <p>Daftar produk-produk yang kami tawarkan.</p>
                </section>
                <section>
                    <ProductComponent />
                </section>
            </div>
        </>
    );
};