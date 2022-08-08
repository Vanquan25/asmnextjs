import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link'
import React from 'react'
import useProducts from '../hook/use-product';

type ProductsProps = {
  products: any[];
}

const ProductList = ({products}: ProductsProps) => {
  const { data, error } = useProducts();
	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;
    return (
               <div className="h-screen w-full flex bg-gray-800">
          <nav className="w-24 flex flex-col items-center bg-gray-900 py-4">
            <div className="text-lg font-semibold text-white">Danh mục</div>
            <ul className="mt-2 text-gray-300 font-semibold">
              <li className="mt-3 t">
                <a href="#" className="flex flex-col items-center text-sm capitalize">
                  <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                    <path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
                      17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
                      8h-8v10h8V11m-10 4H3v6h8v-6z" />
                  </svg>
                  <span>Trà Sữa</span>
                </a>
              </li>
              <li className="mt-3 t">
                <a href="#" className="flex flex-col items-center text-sm capitalize">
                  <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                    <path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
                      17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
                      8h-8v10h8V11m-10 4H3v6h8v-6z" />
                  </svg>
                  <span>Coffee</span>
                </a>
              </li>
            </ul>
          </nav>
          <main className="w-full overflow-y-auto">
            <div className="px-10 mt-5">
              <span className="uppercase font-bold text-2xl text-white">ĐỒ UỐNG</span>
            </div>
            
            <div className="px-10 grid grid-cols-4 gap-4" > 
            {data.map((item: any, index: any) => (
                        <div key={index} className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"  >
                        <div className="bg-white rounded-lg mt-5 max-w-xs hover:scale-110 transition duration-300 ease-in-out">
                          <img src={item.img} className="h-40 rounded-md" />
                        </div>
                        <div className="bg-white shadow-lg rounded-lg -mt-6 w-70">
                          <div className="py-5 px-5">
                            <span className="font-bold text-gray-800 text-lg">{item.name}</span>
                            <div className="flex items-center justify-between">
                              <div className="text-sm text-gray-600 font-light">
                              <Link href="/productDetail"><a  className='btn btn-primary'> Chi tiết</a></Link>
                                <span className="flex items-center">
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                              </div>
                              <div className="text-2xl text-red-600 font-bold">
                                {item.price}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    ))}  
                    </div>       
          </main>
        </div>
            )
        }

        export const getStaticProps: GetStaticProps<ProductsProps> = async (
          context: GetStaticPropsContext
        ) => {
          const data = await (await fetch(`http://localhost:3001/products`)).json();
          console.log('data', data);
          if (!data) {
            return {
              notFound: true
            }
          }
          return {
            props: {
              products: data,
            },
          };
        };


export default ProductList