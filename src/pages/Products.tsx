const Products = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Products</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Discover our amazing range of products designed to meet your needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Product 1</h3>
          <p className="text-muted-foreground">Description of product 1</p>
        </div>
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Product 2</h3>
          <p className="text-muted-foreground">Description of product 2</p>
        </div>
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Product 3</h3>
          <p className="text-muted-foreground">Description of product 3</p>
        </div>
      </div>
    </div>
  );
};

export default Products;