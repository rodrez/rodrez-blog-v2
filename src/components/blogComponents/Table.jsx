import { v4 as uuidv4 } from 'uuid'

export default function BlogTable({ headers, rows }) {
  return (
    <div className="my-6 mx-4 flex flex-col rounded-lg shadow-lg shadow-gray-200 dark:shadow-slate-900">
      <div className="overflow-x-auto rounded-lg">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden shadow-lg">
            <table className="min-w-full table-fixed divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-white dark:bg-dark-container">
                <tr>
                  {headers.map((header) => (
                    <th
                      key={uuidv4()}
                      scope="col"
                      className="p-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-300 lg:p-5"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700  dark:bg-dark-container">
                {rows.map((item) => (
                  <tr key={uuidv4()} className="">
                    {item.map((item) => (
                      <td
                        key={uuidv4()}
                        className="min-w-[12rem] whitespace-nowrap p-4 text-base font-medium hover:bg-gray-100 dark:hover:bg-slate-800 lg:p-5"
                      >
                        {item}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
