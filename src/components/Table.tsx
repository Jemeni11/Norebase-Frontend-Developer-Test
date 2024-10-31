import React, { useState } from "react";
import type { ResponseData } from "../types";

interface TableProps {
  data: ResponseData["data"];
}

const ITEMS_PER_PAGE = 10;

export default function Table({ data }: TableProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const paginatedData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div>
      <table className="my-8 min-w-full rounded-xl bg-white text-sm shadow-2xl sm:my-4">
        <caption className="sr-only">
          Cryptocurrency prices and supply information
        </caption>
        <thead className="hidden text-left sm:table-header-group">
          <tr>
            <th
              scope="col"
              className="whitespace-nowrap px-4 py-2 font-bold text-black"
            >
              💰 Coin
            </th>
            <th
              scope="col"
              className="whitespace-nowrap px-4 py-2 font-bold text-black"
            >
              📄 Code
            </th>
            <th
              scope="col"
              className="whitespace-nowrap px-4 py-2 font-bold text-black"
            >
              🤑 Price
            </th>
            <th
              scope="col"
              className="whitespace-nowrap px-4 py-2 font-bold text-black"
            >
              📉 Total Supply
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {paginatedData.map((coin) => (
            <TableRow key={coin.id}>
              <TableData tablehead="💰 Coin">{coin.name}</TableData>
              <TableData tablehead="📄 Code">{coin.symbol}</TableData>
              <TableData tablehead="🤑 Price">${coin.price_usd}</TableData>
              <TableData tablehead="📉 Total Supply">
                {coin.tsupply} {coin.symbol}
              </TableData>
            </TableRow>
          ))}
        </tbody>
        <tfoot>
          <tr className="grid w-full grid-cols-2 sm:table-row">
            <TableData>
              <div className="flex w-full">
                {currentPage > 0 && (
                  <button
                    className="px-4 py-1"
                    onClick={goToPreviousPage}
                    aria-label="Go to previous page"
                  >
                    <span>⬅</span>
                    <span className="ml-2">Previous</span>
                  </button>
                )}
              </div>
            </TableData>
            <TableData className="hidden sm:table-cell" />
            <TableData className="hidden sm:table-cell" />
            <TableData>
              <div className="flex w-full justify-end">
                {(currentPage + 1) * ITEMS_PER_PAGE < data.length && (
                  <button
                    className="px-4 py-1"
                    onClick={goToNextPage}
                    aria-label="Go to next page"
                  >
                    <span>Next</span>
                    <span className="ml-2">➡</span>
                  </button>
                )}
              </div>
            </TableData>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

function TableRow({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"tr">) {
  return (
    <tr
      className={`grid w-full grid-cols-2 grid-rows-2 odd:bg-[#dcdcdc] sm:table-row ${className ?? ""}`}
      {...props}
    >
      {children}
    </tr>
  );
}

function TableData({
  className,
  children,
  tablehead,
  ...props
}: React.ComponentPropsWithoutRef<"td"> & { tablehead?: string }) {
  return (
    <td
      className={`px-2 py-2 text-gray-700 sm:whitespace-nowrap sm:px-4 ${className ?? ""}`}
      {...props}
    >
      <div className="flex flex-col sm:block">
        <span className="font-bold sm:hidden">{tablehead ?? ""}</span>
        <span>{children}</span>
      </div>
    </td>
  );
}
