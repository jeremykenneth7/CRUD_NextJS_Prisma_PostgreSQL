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
    const validateFields = EmployeeSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!validateFields.success) {
        return {
            Error: validateFields.error.flatten().fieldErrors,
        };
    }

    try {
        const { name, email, phone } = validateFields.data;
        await prisma.employee.create({
            data: {
                name,
                email,
                phone,
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