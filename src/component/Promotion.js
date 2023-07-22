import React from "react";

function Promotion(){
    return<section class="section bg-custom-gray" id="promotions">
    <div class="container">
        <h1 class="mb-5"><span class="text-danger">Medicine</span> Promotions</h1>
        <div class="row align-items-center">
            <div class="col-md-6 col-lg-3">
                <div class="promotion-card text-center mb-4">
                    <h3 class="promotion-card-title">Free Sample</h3>
                    <div class="promotion-card-description">
                        <p>Get a free sample of a featured medicine</p>
                    </div>
                    <ul class="list">
                        <li class="list-item">1 <span class="text-muted">Free Sample</span></li>
                        <li class="list-item">Limited Quantity</li>
                        <li class="list-item">No Purchase Required</li>
                        <li class="list-item">1 <span class="text-muted">User</span></li>
                    </ul>
                    <button class="btn btn-primary btn-rounded w-lg">Claim Now</button>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="promotion-card text-center mb-4">
                    <h3 class="promotion-card-title">Buy One Get One Free</h3>
                    <div class="promotion-card-description">
                        <p>Buy one medicine and get another one for free</p>
                    </div>
                    <ul class="list">
                        <li class="list-item">2 <span class="text-muted">Medicines</span></li>
                        <li class="list-item">Selected Items Only</li>
                        <li class="list-item">Limited Time Offer</li>
                        <li class="list-item">1 <span class="text-muted">User</span></li>
                    </ul>
                    <button class="btn btn-primary btn-rounded w-lg">Shop Now</button>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="promotion-card text-center mb-4">
                    <h3 class="promotion-card-title">Discount Bundle</h3>
                    <div class="promotion-card-description">
                        <p>Buy a bundle of medicines at a discounted price</p>
                    </div>
                    <ul class="list">
                        <li class="list-item">5 <span class="text-muted">Medicines</span></li>
                        <li class="list-item">Pre-selected Bundle</li>
                        <li class="list-item">Save up to 20%</li>
                        <li class="list-item">1 <span class="text-muted">User</span></li>
                    </ul>
                    <button class="btn btn-primary btn-rounded w-lg">Shop Now</button>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="promotion-card text-center mb-4">
                    <h3 class="promotion-card-title">Membership Benefits</h3>
                    <div class="promotion-card-description">
                        <p>Get exclusive perks and discounts with a membership</p>
                    </div>
                    <ul class="list">
                        <li class="list-item">Access to Special Deals</li>
                        <li class="list-item">Priority Shipping</li>
                        <li class="list-item">Dedicated Support</li>
                        <li class="list-item">Unlimited<span class="text-muted">Users</span></li>
                    </ul>
                    <button class="btn btn-primary btn-rounded w-lg">Join Now</button>
                </div>
            </div>
        </div>
    </div>
</section>
}

export default Promotion;