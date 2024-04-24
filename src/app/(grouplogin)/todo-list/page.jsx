import AddNewTaskComponent from "@/components/AddNewTaskComponent"
import EditDeleteDropDownComponent from "@/components/EditDeleteDropDownComponent"
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader"
import TodoCardComponent from "@/components/TodoCardComponent"
import WorkspacePopupComponent from "@/components/WorkspacePopupComponent"

const Page = () => {
    return (
        <div>
            {/* <AddNewTaskComponent/>
            <EditDeleteDropDownComponent/> */}
            {/* <ListBoardComponentHeader/> */}
            <TodoCardComponent/>
            <TodoCardComponent/>
            <TodoCardComponent/>
            <TodoCardComponent/>
        </div>
    )
}

export default Page