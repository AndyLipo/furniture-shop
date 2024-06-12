import express from "express";
import cors from "cors";

//SDK
import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({ 
    accessToken: "TEST-8103347701943887-050518-392f54821d6eb1777af354fa49dc0367-295248086", 
});

const app = express();
const port = 5050;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("soy el server :)")
});

app.post("/create_preference", async (req, res) => {
    try {
        const body = {
            items: [
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "ARS",
                },
            ],
            back_urls: {
                success: "https://www.youtube.com/@onthecode",
                failure: "https://www.youtube.com/@onthecode",
                pending: "https://www.youtube.com/@onthecode",
            },
            auto_return: "approved",
        };

        const preference = new Preference(client);
        const result = await preference.create({ body });
        res.json({
            id: result.id,
        });
    } catch (error) {
         console.log(error);
        // res.status(500).json({
        //     error: "Error al crear la preferencia :(",
        // });
        
    }
})

app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`);
})