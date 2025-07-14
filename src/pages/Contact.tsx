const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="max-w-md">
        <p className="text-lg text-muted-foreground mb-6">
          Get in touch with us! We'd love to hear from you.
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-muted-foreground">contact@example.com</p>
          </div>
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </div>
          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="text-muted-foreground">123 Main St, City, State 12345</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;