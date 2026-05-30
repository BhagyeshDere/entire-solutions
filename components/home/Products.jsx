export default function Products() {
  return (
    <section
      id="products"
      className="py-24"
    >
      <div className="container-custom">

        <h2 className="text-5xl font-bold text-center mb-14">
          Our Products
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white rounded-xl shadow p-6">
            BESS Skids
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            Transformer Skids
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            Battery Rack Systems
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            Structural Skids
          </div>

        </div>

      </div>
    </section>
  );
}