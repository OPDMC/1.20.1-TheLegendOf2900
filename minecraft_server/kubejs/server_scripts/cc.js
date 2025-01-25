ServerEvents.recipes((event) => {
  event.remove({ id: "computercraft:computer_normal" });
  event.remove({ id: "computercraft:computer_advanced" });
  event.remove({ id: "computercraft:computer_advanced_upgrade" });
  event.remove({ id: "computercraft:turtle_normal" });
  event.remove({
    id: "computercraft:turtle_normal_overlays/turtle_rainbow_overlay",
  });
  event.remove({
    id: "computercraft:turtle_normal_overlays/turtle_trans_overlay",
  });
  event.remove({
    id: "computercraft:turtle_advanced_overlays/turtle_rainbow_overlay",
  });
  event.remove({
    id: "computercraft:turtle_advanced_overlays/turtle_trans_overlay",
  });

  event.remove({ id: "computercraft:turtle_advanced" });
  event.remove({ id: "computercraft:turtle_advanced_upgrade" });

  event.remove({ id: "computercraft:turtle_upgrade" });

  event.remove({ id: "computercraft:pocket_computer_normal" });
  event.remove({ id: "computercraft:pocket_computer_advanced" });
  event.remove({ id: "computercraft:pocket_computer_advanced_upgrade" });
  event.remove({ id: "computercraft:wireless_modem_normal" });
  event.remove({ id: "computercraft:wireless_modem_advanced" });
  event.remove({ id: "computercraft:wired_modem" });
  event.remove({ id: "computercraft:monitor_normal" });
  event.remove({ id: "computercraft:monitor_advanced" });
  event.remove({ id: "computercraft:speaker" });
  event.remove({ id: "computercraft:printer" });
  event.remove({ id: "computercraft:disk_drive" });

  event.shapeless("computercraft:speaker", [
    "create:andesite_casing",
    "alexscaves:polymer_plate",
  ]);
  event.shapeless("computercraft:printer", [
    "create:andesite_casing",
    "minecraft:paper",
  ]);
  event.shapeless("computercraft:monitor_normal", [
    "crystal_clear:andesite_clear_glass_casing",
    "2x create:nixie_tube",
  ]);
  event.shapeless("computercraft:monitor_advanced", [
    "crystal_clear:brass_clear_glass_casing",
    "4x create:nixie_tube",
  ]);
  event.shapeless("computercraft:wired_modem_full", [
    "refinedstorage:quartz_enriched_iron_block",
    "create:brass_casing",
  ]);

  event.shapeless("computercraft:wireless_modem_normal", [
    "refinedstorage:quartz_enriched_iron_block",
    "create:andesite_casing",
    "minecraft:ender_pearl",
  ]);
  event.shapeless("computercraft:wireless_modem_advanced", [
    "refinedstorage:quartz_enriched_iron_block",
    "create:brass_casing",
    "minecraft:ender_pearl",
  ]);
  event.shaped(Item.of("computercraft:disk_drive"), ["EEE", " A "], {
    E: "create:electron_tube",
    A: "create:andesite_casing",
  });

  event.shaped(Item.of("computercraft:computer_normal"), ["EEE", "EAE"], {
    E: "kubejs:compute_mechanism",
    A: "create:andesite_casing",
  });

  event.shaped(
    Item.of("computercraft:computer_advanced"),
    ["EEE", "EAE", "EEE"],
    {
      E: "kubejs:compute_mechanism",
      A: "create:brass_casing",
    }
  );

  for (var i = 0; i <= 7; i++) {
    event.recipes.create.mechanical_crafting(
      Item.of(
        "kubejs:incomplete_compute_mechanism_" + (((i + 3) % 8) + 1)
      ),
      ["CAT"],
      {
        C: Item.of("kubejs:incomplete_compute_mechanism_" + (i + 1)),
        A: Item.of("kubejs:brass_tube"),
        T: Item.of("kubejs:incomplete_compute_mechanism_3"),
      }
    );
  }

  event.shapeless("2x kubejs:compute_mechanism", [
    "kubejs:incomplete_compute_mechanism_3",
    "kubejs:incomplete_compute_mechanism_8",
  ]);

  event.recipes.create.mechanical_crafting(
    Item.of(
      "kubejs:incomplete_compute_mechanism_3"
    ),
    ["AAA"],
    {
      A: Item.of("3x kubejs:brass_tube"),
    }
  );
  event.recipes.create.mechanical_crafting(
    Item.of(
      "kubejs:incomplete_compute_mechanism_3"
    ),
    ["A","A","A"],
    {
      A: Item.of("3x kubejs:brass_tube"),
    }
  );

  event.shapeless('computercraft:pocket_computer_normal', ['computercraft:computer_normal', 'createaddition:capacitor'])
  event.shapeless('computercraft:pocket_computer_advanced', ['computercraft:computer_advanced', 'createaddition:capacitor'])
});
