export default function Button({type}) {
  return (
    <button
      type={type}
      className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-md w-full"
    />
  );
}
