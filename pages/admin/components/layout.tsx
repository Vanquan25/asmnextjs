import React from "react";

type Props = {};

const layout = (props: Props) => {
    return (
        <div className="flex flex-col bg-slate-400 ml-60">
        <div className="">
            <div className="py-4 inline-block min-w-full">
            <div className="">
                <table className="min-w-full text-center">
                <thead className="border-b bg-gray-800">
                    <tr>
                    <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                    >
                        STT
                    </th>
                    <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                    >
                        TÊN SẢN PHẨM
                    </th>
                    <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                    >
                        GIÁ SẢN PHẨM
                    </th>
                    <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                    >
                        HÌNH ẢNH
                    </th>
                    <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                    >
                        Mô TẢ SẢN PHẨM
                    </th>
                    <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                    >
                        TRẠNG THÁI
                    </th>
                    <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                    >
                        
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        1
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Mark
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Otto
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        @mdo
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        @mdo
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
    );
};

export default layout;
