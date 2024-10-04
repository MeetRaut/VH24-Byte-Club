const DonationNeed = require('../models/donationNeed-model');
const Institute = require('../models/institute-model');
const Donation = require('../models/donation-model');


// Post Donation Need
// const postDonationNeed = async (req, res) => {
//     try {
//         const { amount, description } = req.body;

//         // Get the institute ID from the authenticated user
//         // const userId = req.user._id;
//         const instituteId = req.user._id; // assuming req.user contains the logged-in user's info

//         const donationNeed = new Donation({
//             // userId,
//             instituteId,
//             amount,
//             description,
//         });

//         await donationNeed.save();
//         res.status(201).json(donationNeed);
//     } catch (error) {
//         console.error("Error creating donation need:", error);
//         res.status(400).json({ message: "Failed to create donation need", error: error.message });
//     }
// };
const postDonationNeed = async (req, res) => {
    try {
        const { amount, description } = req.body;

        // Get the institute ID from the authenticated user
        const instituteId = req.user._id;

        const donationNeed = new DonationNeed({
            instituteId,
            amount,
            description,
        });

        await donationNeed.save();
        res.status(201).json(donationNeed);
    } catch (error) {
        console.error("Error creating donation need:", error);
        res.status(400).json({ message: "Failed to create donation need", error: error.message });
    }
};

// Get Donation Needs
// const getDonationNeeds = async (req, res) => {
//     try {
//         const donationNeeds = await Donation.find().populate('instituteId', 'name');
//         res.json(donationNeeds);
//     } catch (error) {
//         res.status(500).json({ message: 'Failed to retrieve donation needs', error: error.message });
//     }
// };
const getDonationNeeds = async (req, res) => {
    try {
        const donationNeeds = await DonationNeed.find().populate('instituteId', 'name');
        res.json(donationNeeds);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve donation needs', error: error.message });
    }
};

// Donate to Institute
// const donateToInstitute = async (req, res) => {
//     const { amount, instituteId,description } = req.body; // Include instituteId in the request body

//     // Validate input
//     if (!amount || !instituteId) {
//         return res.status(400).json({ message: 'Amount and instituteId are required.' });
//     }

//     try {
//         const donation = new Donation({
//             userId: req.user._id, // Get user ID from the authenticated user
//             instituteId: instituteId, // Get instituteId from the request body
//             amount,
//             description
//         });

//         await donation.save();
//         res.status(201).json(donation);
//     } catch (error) {
//         res.status(500).json({ message: 'Failed to donate to the institute', error: error.message });
//     }
// };
const donateToInstitute = async (req, res) => {
    const { amount, instituteId, description } = req.body;

    // Validate input
    if (!amount || !instituteId) {
        return res.status(400).json({ message: 'Amount and instituteId are required.' });
    }

    try {
        const donation = new Donation({
            userId: req.user._id, // Get user ID from the authenticated user
            instituteId, // Get instituteId from the request body
            amount,
            description,
        });

        await donation.save();
        res.status(201).json(donation);
    } catch (error) {
        res.status(500).json({ message: 'Failed to donate to the institute', error: error.message });
    }
};



// Get Donations for Admin
// const getDonationsForAdmin = async (req, res) => {
//     try {
//         const donations = await Donation.find()
//             .populate('instituteId', 'name')
//             .populate('userId', 'name');
//         res.json(donations);
//     } catch (error) {
//         res.status(500).json({ message: 'Failed to retrieve donations for admin', error: error.message });
//     }
// };

const getDonationsForAdmin = async (req, res) => {
    try {
        const donations = await Donation.find()
            .populate({
                path: 'instituteId',
                select: 'name',  // Get only the name of the institute
            })
            .populate({
                path: 'userId',
                select: 'username',  // Assuming you want the username
            });

        // Map donations to include userId and instituteId checks
        const donationsWithUserDetails = donations.map(donation => ({
            _id: donation._id,
            amount: donation.amount,
            createdAt: donation.createdAt,
            instituteId: donation.instituteId ? {
                _id: donation.instituteId._id,
                name: donation.instituteId.name,
            } : null,  // Handle cases where instituteId is null
            userId: donation.userId ? {
                _id: donation.userId._id,
                username: donation.userId.username,
            } : null,  // Handle cases where userId is null
            description: donation.description || null,  // If you added description
        }));

        res.json(donationsWithUserDetails);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve donations for admin', error: error.message });
    }
};

const getDonationSummary = async (req, res) => {
    try {
        const donationSummary = await Donation.aggregate([
            {
                $group: {
                    _id: "$instituteId", // Group by instituteId
                    totalAmount: { $sum: "$amount" }, // Sum of amounts
                    totalCount: { $sum: 1 } // Count of donations
                }
            },
            {
                $lookup: {
                    from: "institutes", // The name of your Institute collection
                    localField: "_id",
                    foreignField: "_id",
                    as: "instituteDetails" // This will hold the institute details
                }
            },
            {
                $unwind: "$instituteDetails" // Unwind the array to get institute details
            },
            {
                $project: {
                    _id: 0,
                    instituteId: "$_id",
                    totalAmount: 1,
                    totalCount: 1,
                    instituteName: "$instituteDetails.name" // Get the institute name
                }
            }
        ]);

        res.json(donationSummary);
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve donation summary", error: error.message });
    }
};


module.exports = {
    postDonationNeed,
    getDonationNeeds,
    donateToInstitute,
    getDonationsForAdmin,
    getDonationSummary
};
