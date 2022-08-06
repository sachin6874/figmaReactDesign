import Switch from 'react-switch'
import { useContext } from 'react';
import { themeContext } from '../App';


const ThemeToggler=()=>{
    const { theme, setTheme}=useContext(themeContext);
    const toggleTheme=()=>{
        setTheme(theme==="light"?"dark":"light")
        
        }
   return  <div className="switch">
    <Switch  
    uncheckedIcon = {false} 
    checkedIcon={true} 
    onChange={toggleTheme}
    checked={theme==="dark"}
    onColor="#ee"
    />
    </div>
}

export default ThemeToggler;