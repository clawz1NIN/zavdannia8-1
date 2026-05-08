const History = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">📜</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Короткий історичний огляд події або постаті
          </h1>
          <p className="text-xl text-gray-600">
            Історичні факти та персоналії
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded">
            <p className="text-gray-700 text-lg">
              📝 Тут буде розміщено короткий історичний огляд події або постаті
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
