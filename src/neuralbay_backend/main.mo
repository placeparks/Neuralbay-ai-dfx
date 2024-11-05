import Array "mo:base/Array";

actor ModelStorage {
  stable var models : [(Text, Text, Text)] = [];

  public shared func addModel(name: Text, url: Text, uploaderPrincipal: Text) : async Text {
    // Append the model data to the storage
    models := Array.append(models, [(name, url, uploaderPrincipal)]);
    return "Model added successfully!";
  };

  public func getModels() : async [(Text, Text, Text)] {
    return models;
  };
}
