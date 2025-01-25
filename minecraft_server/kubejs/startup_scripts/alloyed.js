StartupEvents.registry("block", (event) => {
  event
    .create("alloyed:steel_block")
    .hardness(5.0)
    .resistance(14.0)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .tagBlock("minecraft:needs_stone_tool")
    .mapColor(Color.GRAY)
    .soundType("netherite_block");

  //   event
  //     .create("alloyed:steel_bars")
  //     .hardness(5.0)
  //     .resistance(14.0)
  //     .requiresTool(true)
  //     .tagBlock("create:fan_transparent")
  //     .tagBlock("mineable/pickaxe")
  //     .tagBlock("minecraft:needs_stone_tool")
  //     .mapColor(Color.GRAY)
  //     .soundType("netherite_block");
});

ItemEvents.armorTierRegistry((event) => {
  event.add("alloyed:steel", (tier) => {
    tier.durabilityMultiplier = 30; // Each slot will be multiplied with [13, 15, 16, 11]
    tier.slotProtections = [3, 5, 7, 3]; // Slot indicies are [FEET, LEGS, BODY, HEAD]
    tier.enchantmentValue = 9;
    tier.equipSound = "minecraft:item.armor.equip_iron";
    tier.repairIngredient = "#forge:ingots/steel";
    tier.toughness = 2.0;
    tier.knockbackResistance = 0;
  });
});

StartupEvents.registry("item", (event) => {
  event.create("alloyed:steel_ingot");
  event.create("alloyed:steel_nugget");
  event.create("alloyed:steel_sheet");

  event
    .create("alloyed:steel_helmet", "helmet")
    .tier("alloyed:steel")
    .maxDamage(330);

  event
    .create("alloyed:steel_chestplate", "chestplate")
    .tier("alloyed:steel")
    .maxDamage(480);

  event
    .create("alloyed:steel_leggings", "leggings")
    .tier("alloyed:steel")
    .maxDamage(450);

  event
    .create("alloyed:steel_boots", "boots")
    .tier("alloyed:steel")
    .maxDamage(390);

  event.create("alloyed:steel_sword", "sword").tier("diamond").maxDamage(750);

  event
    .create("alloyed:steel_pickaxe", "pickaxe")
    .tier("diamond")
    .maxDamage(750);
  event.create("alloyed:steel_axe", "axe").tier("diamond").maxDamage(750);
  event.create("alloyed:steel_shovel", "shovel").tier("diamond").maxDamage(750);
  event.create("alloyed:steel_hoe", "hoe").tier("diamond").maxDamage(750);
  event.create("alloyed:steel_knife", "sword").tier("diamond").maxDamage(750);
  event.create("alloyed:steel_shears", "shears").maxDamage(750);
});
