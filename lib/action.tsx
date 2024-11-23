"use server";

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const EmployeeSchema = z.object({
    name: z.string().min(6),
    email: z.string().email().min(6),
    phone: z.string().min(10),
});

export const saveEmployee = async (prevState: any, formData: FormData) => {
    const validatedFields = EmployeeSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        const { name, email, phone } = validatedFields.data;
        await prisma.employee.create({
            data: {
                name: validatedFields.data.name,
                email: validatedFields.data.email,
                phone: validatedFields.data.phone,
            },
        });
        console.log("Success");
    } catch (error) {
        console.error("Error saving employee", error);
        return { error: "Error saving employee" };
    }

    revalidatePath("/employee");
    redirect("/employee");
};