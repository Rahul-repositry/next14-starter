import { User } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"; // Assuming you have bcrypt installed

export const POST = async (request) => {
  try {
    connectToDb();
    console.log(request.body);

    const { username, password } = request.body; // Destructure credentials

    const user = await User.findOne({ username });
    console.log(user);
    if (!user) {
      return NextResponse.json(
        { error: "Wrong credentials!" },
        { status: 401 }
      );
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return NextResponse.json(
        { error: "Wrong credentials!" },
        { status: 401 }
      );
    }

    return NextResponse.json({ user });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Failed to fetch posts!" },
      { status: 500 }
    );
  }
};
oo;
