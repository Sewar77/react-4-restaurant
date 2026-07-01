import { useEffect, useState } from "react"
import toast from "react-hot-toast"

export const useMenu = () => {

    const [menu, setMenu] = useState([])
    const fetchAllMenu = () => {
        try {
            const menuItems = JSON.parse(localStorage.getItem("menu"))
            setMenu(menuItems)
        } catch (error) {
            console.log(error);

        }
    }
    //delete and update => id 
    const deleteMenuItem = (id) => {
        // recieve an id. 
        try {
            if (!id) {
                toast.error("not choosen")
                return
            }
            // filter is to delete item in array
            const newMenu = menu.filter(item => item.id !== id)
            // map to filter 
            setMenu(newMenu)
            localStorage.setItem("menu", JSON.stringify(newMenu))
            toast.success("deleted")
        } catch (error) {
            console.log(error);

            toast.error("not choosen")
        }
    }

    useEffect(() => {
        fetchAllMenu()
    }, [])
    //get menu from localstorage always!
    return { menu, deleteMenuItem }
}