"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { saveEmployee } from "../../../lib/action";
import { useActionState } from "react";

const CreateEmployeePage = () => {
    const [state, formAction] = useActionState(saveEmployee, null);
    return (
        <div className="max-w-md mx-auto mt-5">
            <h1 className="text-2xl font-bold text-gray-900">
                Create New Employee
            </h1>
            <form action={formAction}>
                <div className="mt-5">
                    <label className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    />
                    <div id="name-error"aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
                    </div>
                </div>
                <div className="mt-5">
                    <label className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    />
                    <div id="name-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.email}</p>
                    </div>
                </div>
                <div className="mt-5">
                    <label className="block text-sm font-medium text-gray-700">
                        Phone
                    </label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    />
                    <div id="name-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
                    </div>
                </div>
                <div className="mt-5">
                    <button className="btn btn-primary">Save</button>
                    <Link href="/" className="btn btn-error">
                        Cancel
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default CreateEmployeePage;