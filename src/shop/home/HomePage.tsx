import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomJumbotron } from "../components/CustomJumbotron"

export const HomePage = () => {
  return (
    <>
      <CustomJumbotron
        title="Todos los productos"
      />

      <CustomPagination totalPages={7}/>
    </>
  )
}
