import { CustomLink } from "../CustomLink/CustomLink";
import "./Header.css"

export const Header = ()=>{
    return (
        <div className="headerDessign">
<CustomLink 
        title={"home"}
        destination={"/"}
      />
      <CustomLink 
        title={"register"}
        destination={"/register"}
      />
      <CustomLink 
        title={"login"}
        destination={"/login"}
      />
        </div>
    )
} 