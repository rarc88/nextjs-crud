'use client';
import {useEffect, useState} from 'react';
import dayjs from 'dayjs';


export default function Page() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logs`);
    const json = await response.json();
    setData(json.response);
  };

  const formatDate = (timestamp, timezone) => {
    const dt = dayjs(timestamp, timezone);
    const formatted = dt.format('YYYY-MM-DD h:mm:ss a');
    return formatted;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='relative overflow-x-auto'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              User
            </th>
            <th scope='col' className='px-6 py-3'>
              Action
            </th>
            <th scope='col' className='px-6 py-3'>
              Path
            </th>
            <th scope='col' className='px-6 py-3'>
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => {
            return (
              <tr key={index} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {element.access.user.name}
                </th>
                <td className='px-6 py-4'>
                  {element.action.method}
                </td>
                <td className='px-6 py-4'>
                  {element.device.url}
                </td>
                <td className='px-6 py-4'>
                  {formatDate(element.timestamp, element.timezone)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
