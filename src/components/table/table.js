import React from 'react';
import TableItem from "../table-item/table-item";
import "./table.css";


const Table = () => {

    // const elements = posts.map(item => {
    //     return(
    //         <li key={item.id} className="list-group-item">
    //             <PostListItem 
    //                 label={item.label} 
    //                 important={item.important}
    //                 like={item.like}
    //                 onDelete={() => onDelete(item.id)}
    //                 onTogImportant={() => onTogImportant(item.id)}
    //                 onTogLiked={() => onTogLiked(item.id)}/>
    //         </li>
    //     );
    // });

    return(
        <table className="post-list list-group">
            <TableItem/>
        </table>
    )
};
export default Table;