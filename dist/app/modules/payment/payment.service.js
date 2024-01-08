"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentService = void 0;
/* eslint-disable @typescript-eslint/ban-ts-comment */
const stripe_1 = __importDefault(require("stripe"));
const config_1 = __importDefault(require("../../../config"));
const stripe = new stripe_1.default(config_1.default.stripeSecretKey, {
    apiVersion: '2023-10-16',
});
const createCharge = (price) => __awaiter(void 0, void 0, void 0, function* () {
    const productPrice = parseInt(price);
    const amount = (productPrice * 100);
    console.log(amount, 'amount inside the intent');
    const paymentIntent = yield stripe.paymentIntents.create({
        amount: amount,
        currency: 'usd',
        payment_method_types: ['card']
    });
    const result = paymentIntent.client_secret;
    return {
        clientSecret: result
    };
});
exports.paymentService = {
    createCharge
};
