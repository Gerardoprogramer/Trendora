import { AdminTitle } from '@/admin/components/AdminTitle';
import { CustomPagination } from '@/components/custom/CustomPagination';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { PencilIcon, PlusIcon } from 'lucide-react';
import { Link } from 'react-router';
import { useProducts } from '@/shop/hooks/useProducts';
import { CustomFullScreenLoading } from '@/components/custom/CustomFullScreenLoading';

export const AdminProductsPage = () => {

  const { data, isLoading } = useProducts();

  if (isLoading) {
    return (<CustomFullScreenLoading />)
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <AdminTitle
          title="Productos"
          subtitle="Aquí puedes ver y administrar tus productos"
        />

        <div className="flex justify-end mb-10 gap-4">
          <Link to="/admin/products/new">
            <Button>
              <PlusIcon />
              Nuevo producto
            </Button>
          </Link>
        </div>
      </div>

      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
        <TableHeader>
          <TableRow>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead>Tallas</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>

        {data?.products.map((product) => (
          <TableBody key={product.id}>
            <TableRow>
              <TableCell>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-20 h-20 object-cover rounded-md"
                />
              </TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>{`$${product.price}`}</TableCell>
              <TableCell>{product.gender}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.sizes.join(', ')}</TableCell>
              <TableCell className="text-right">
                {/* <Link to={`t-shirt-teslo`}>Editar</Link> */}
                <Link to={`/admin/products/${product.id}`}>
                  <PencilIcon className='w-4 h-4 text-blue-500'/>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        ))}

      </Table>

      <CustomPagination totalPages={data?.pages || 0} />
    </>
  );
};