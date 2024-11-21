import { createRoot } from "react-dom/client";
import IntroPart from "./IntroPart";
import index from "./index.css"

const Root = createRoot(document.getElementById("root"));
Root.render(
    <div className="container">
        <IntroPart />
    </div>
);

