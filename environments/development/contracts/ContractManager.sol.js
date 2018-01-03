// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"name","type":"bytes32"},{"name":"addr","type":"address"}],"name":"addContract","outputs":[{"name":"result","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"bytes32"}],"name":"removeContract","outputs":[{"name":"result","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"remove","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"contracts","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "606060405260008054600160a060020a031916331790556102df806100246000396000f3606060405260e060020a60003504635188f996811461003c578063a43e04d8146100ca578063a7f437791461010a578063ec56a37314610243575b005b61026460043560243560008054819033600160a060020a03908116911614156102ad57507fb11df41100000000000000000000000000000000000000000000000000000000606090815230600160a060020a0390811660645283919082169063b11df4119060849060209060248188876161da5a03f1156100025750506040515115159050610280576102ad565b6102646004356000805433600160a060020a03908116911614156102d65781815260016020526040812054600160a060020a03168114156102b4576102d6565b61003a60008054819033600160a060020a03908116911614156102db575060016020527f6ad35fd65bb3669d0247b330f6c7ad21e67d3f7accfa364b5408e5cbccc31708547f7461736b626f617264000000000000000000000000000000000000000000000082527f79fa7ea6834bf566cca57ee50e1150f333a531248bd6d864294347bb7e619b4e54600160a060020a039182169291169082146101f1577fa7f43779000000000000000000000000000000000000000000000000000000006060908152829063a7f437799060649060009060048183876161da5a03f115610002575050505b600081146102355780600160a060020a031663a7f437796040518160e060020a0281526004018090506000604051808303816000876161da5a03f115610002575050505b600054600160a060020a0316ff5b610276600435600160205260009081526040902054600160a060020a031681565b60408051918252519081900360200190f35b6060908152602090f35b838252600160208190526040909220805473ffffffffffffffffffffffffffffffffffffffff1916821790555b5092915050565b60409020805473ffffffffffffffffffffffffffffffffffffffff1916905560015b919050565b505056",
    unlinked_binary: "606060405260008054600160a060020a031916331790556102df806100246000396000f3606060405260e060020a60003504635188f996811461003c578063a43e04d8146100ca578063a7f437791461010a578063ec56a37314610243575b005b61026460043560243560008054819033600160a060020a03908116911614156102ad57507fb11df41100000000000000000000000000000000000000000000000000000000606090815230600160a060020a0390811660645283919082169063b11df4119060849060209060248188876161da5a03f1156100025750506040515115159050610280576102ad565b6102646004356000805433600160a060020a03908116911614156102d65781815260016020526040812054600160a060020a03168114156102b4576102d6565b61003a60008054819033600160a060020a03908116911614156102db575060016020527f6ad35fd65bb3669d0247b330f6c7ad21e67d3f7accfa364b5408e5cbccc31708547f7461736b626f617264000000000000000000000000000000000000000000000082527f79fa7ea6834bf566cca57ee50e1150f333a531248bd6d864294347bb7e619b4e54600160a060020a039182169291169082146101f1577fa7f43779000000000000000000000000000000000000000000000000000000006060908152829063a7f437799060649060009060048183876161da5a03f115610002575050505b600081146102355780600160a060020a031663a7f437796040518160e060020a0281526004018090506000604051808303816000876161da5a03f115610002575050505b600054600160a060020a0316ff5b610276600435600160205260009081526040902054600160a060020a031681565b60408051918252519081900360200190f35b6060908152602090f35b838252600160208190526040909220805473ffffffffffffffffffffffffffffffffffffffff1916821790555b5092915050565b60409020805473ffffffffffffffffffffffffffffffffffffffff1916905560015b919050565b505056",
    address: "",
    generated_with: "2.0.9",
    contract_name: "ContractManager"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("ContractManager error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("ContractManager error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("ContractManager error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("ContractManager error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.ContractManager = Contract;
  }

})();