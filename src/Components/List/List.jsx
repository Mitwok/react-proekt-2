import EditButtonIcon from "../EditButtonIcon";
import DeleteButtonIcon from "../DeleteButtonIcon";

const List = (props) => {
  return (
    <div className="mb-1 h-full overflow-y-auto">
      <ul>
        {props.item.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center bg-white rounded-lg mb-4 p-2 text-xl md:text-base"
          >
            <div className="flex justify-between w-full px-4">
              <span>{item.title}</span>
              <span className="text-center">{item.amount} zł</span>
            </div>
            <div className="flex flex-nowrap">
              <button
                type="button"
                onClick={() =>
                  props.onItemEdit(item.id, item.amount, item.title)
                }
                title="Edytuj"
                className="p-2 mr-2"
              >
                <EditButtonIcon />
              </button>
              <button
                type="button"
                onClick={() => props.onItemRemove(item.id)}
                title="Usuń"
                className="p-2"
              >
                <DeleteButtonIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
