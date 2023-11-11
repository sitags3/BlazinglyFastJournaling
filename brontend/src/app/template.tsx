import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { FC } from "react"

type Props = { 
    children: React.ReactNode; 
}
const Template: FC<Props> = ({ children }) => {
    return (
        <>
            {/* <Header/> */}
            <div>{children}</div>
            {/* <Footer/> */}
        </>
    )
}

export default Template