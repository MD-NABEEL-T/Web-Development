require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

async function resetPassword() {
    await mongoose.connect(process.env.MONGO_URI);

    const hash = await bcrypt.hash('system@123', 10);

    await mongoose.connection.collection('users').updateOne(
        { email: 'system@test.com' },
        { $set: { password: hash } }
    );

    console.log('Password reset successfully!');
    process.exit(0);
}

resetPassword();