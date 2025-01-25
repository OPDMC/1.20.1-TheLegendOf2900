ItemEvents.tooltip((event) => {
  event.addAdvanced("alexscaves:remote_detonator", (item, advanced, text) => {
    text.add(
      1,
      Text.of({ translate: "kubejs.tooltips.remote_detonator" })
        .italic(true)
        .blue()
    );
  });

  event.add("kubejs:creative_mechanism", {
    translate: "kubejs.tooltips.creative_mechanism",
  });
  event.add("alexscaves:nuclear_bomb", {
    translate: "kubejs.tooltips.nuclear_bomb",
  });

  event.add("kubejs:rough_diamond", {
    translate: "kubejs.tooltips.rough_diamond",
  });
  event.add("kubejs:rough_lazurite", {
    translate: "kubejs.tooltips.rough_lazurite",
  });

  event.add("minecraft:glowstone", { translate: "kubejs.tooltips.glowstone" });
  event.add("minecraft:glowstone_dust", {
    translate: "kubejs.tooltips.glowstone_dust",
  });
  event.add("minecraft:crimson_nylium", {
    translate: "kubejs.tooltips.crimson_nylium",
  });

  event.add("alexscaves:fissile_core", {
    translate: "kubejs.tooltips.fissile_core",
  });
  event.add("sophisticatedbackpacks:backpack", {
    translate: "kubejs.tooltips.backpack",
  });
  event.add("kubejs:lapis_lazuli_shard", {
    translate: "kubejs.tooltips.lapis_lazuli_shard",
  });
  event.add("minecraft:ghast_tear", {
    translate: "kubejs.tooltips.ghast_tear",
  });

  event.add("create:tree_fertilizer", {
    translate: "kubejs.tooltips.tree_fertilizer",
  });

  event.add("refinedstorage:wireless_grid", {
    translate: "kubejs.tooltips.wireless_grid",
  });
  event.add("refinedstorageaddons:wireless_crafting_grid", {
    translate: "kubejs.tooltips.wireless_grid",
  });

  event.addAdvanced("kubejs:incomplete_compute_mechanism", (item, advanced, text) => {
    if (item.nbt && item.nbt.seq) {
      text.add(Text.of(Number.toFixed(item.nbt.seq + 1)).gold());
    }
  });
});
