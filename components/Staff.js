function Staff({ name, title }) {
  return (
    <div>
      <div className="flex items-center flex-col mt-2">
        <p className="text-sm">{title}</p>
        <p className="text-xs text-green-800">{name}</p>
      </div>
    </div>
  );
}

export default Staff;
