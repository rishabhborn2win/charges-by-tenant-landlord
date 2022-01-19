const mongoose = require("mongoose");
const chargeSchema = new mongoose.Schema(
  {
    site_id: {
      type: mongoose.Schema.Types.ObjectId,
      requred: true,
    },
    tenant_id: {
      type: mongoose.Schema.Types.ObjectId,
      requred: true,
    },
    isPaid: {
      type: Boolean,
      default: false,
      required: true,
    },
    description: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Charges || mongoose.model("Charges", chargeSchema);
