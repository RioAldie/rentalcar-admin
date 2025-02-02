'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Cars } from '@/types';
import { toast } from '@/hooks/use-toast';
import { carsSchema } from '@/lib/validation';

interface Props extends Partial<Cars> {
  type?: 'create' | 'update';
}

const CarForm = ({ type, ...book }: Props) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof carsSchema>>({
    resolver: zodResolver(carsSchema),
    defaultValues: {
      name: '',
      brand: '',
      model: '',
      year: 1999,
      color: '',
      image: '',
      transmision: '',
      seat: 2,
      costPerDay: 10,
      location: '',
      available: true,
      createAt: '',
      id: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof carsSchema>) => {
    // const result = await createBook(values);
    // if (result.success) {
    //   toast({
    //     title: 'Success',
    //     description: 'Book created successfully',
    //   });
    //   router.push(`/admin/books/${result.data.id}`);
    // } else {
    //   toast({
    //     title: 'Error',
    //     description: result.message,
    //     variant: 'destructive',
    //   });
    // }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8">
        <FormField
          control={form.control}
          name={'name'}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-dark-500">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  required
                  placeholder="Car Name"
                  {...field}
                  className="book-form_input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={'brand'}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-dark-500">
                Brand
              </FormLabel>
              <FormControl>
                <Input
                  required
                  placeholder="Brand"
                  {...field}
                  className="book-form_input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={'model'}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-dark-500">
                Model
              </FormLabel>
              <FormControl>
                <Input
                  required
                  placeholder="Model"
                  {...field}
                  className="book-form_input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={'year'}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-dark-500">
                Year
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={1}
                  max={5}
                  placeholder="Year"
                  {...field}
                  className="book-form_input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={'color'}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-dark-500">
                Color
              </FormLabel>
              <FormControl>
                <Input
                  type="string"
                  placeholder="Color"
                  {...field}
                  className="book-form_input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={'transmision'}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-dark-500">
                Transmision
              </FormLabel>
              <FormControl>
                <Input
                  type="string"
                  placeholder="Transmision"
                  {...field}
                  className="book-form_input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={'seat'}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-dark-500">
                Seat
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={1}
                  max={6}
                  placeholder="Seat"
                  {...field}
                  className="book-form_input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={'costPerDay'}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-dark-500">
                Cost Per Day
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={1}
                  max={10}
                  placeholder="Cost Per Day"
                  {...field}
                  className="book-form_input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={'location'}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-dark-500">
                Location
              </FormLabel>
              <FormControl>
                <Input
                  type="string"
                  placeholder="Location"
                  {...field}
                  className="book-form_input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="book-form_btn text-white">
          Add Book to Library
        </Button>
      </form>
    </Form>
  );
};
export default CarForm;
