'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';

import {
  userForm as formSchema,
  selectableOptions,
  userFormInterface,
} from '@/schema';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
// import { CITY } from '@/lib/city';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { sheerURL } from '@/server-functions/formSumit';

export default function ContactUsForm() {
  const form = useForm<userFormInterface>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      whatsappNumber: '',
    },
  });

  async function onSubmit(values: userFormInterface) {
    const { email, message, username, whatsappNumber, intrestedProgram } =
      values;
    console.log(values);
    try {
      const url = sheerURL(
        username,
        whatsappNumber,
        email,
        message,
        intrestedProgram
      );

      const request = await fetch(url);
      

      // Show a success message to the user
      toast('We Had Sucessfully Recived Your Response', {
        description: 'Join The WhatsApp Community For Get updated',
        // action: {
        //   label: 'Undo',
        //   onClick: () => console.log('Undo'),
        // },
      });

      // setTimeout(() => {
      //   window.open(
      //     'https://chat.whatsapp.com/CS7xHxqryZMICQPha0t986',
      //     '_blank'
      //   );
      // }, 1500);
    } catch (error) {
      // Handle any errors that occur during the CRUD operation
      console.error('Error creating event:', error);
      // Optionally, show an error message to the user
      toast('Failed to create event. Please try again later.', {
        description: 'Some Error Message',
      });
    }
  }

  return (
    <Form {...form}>
      <form className='' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name={'username'}
          render={({ field }) => (
            <FormItem className='space-y-3 py-3'>
              <FormLabel>{'Your Name'}</FormLabel>
              <FormControl>
                <Input placeholder={'Enter Your Beautiful Name'} {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={'email'}
          render={({ field }) => (
            <FormItem className='space-y-3 py-3'>
              <FormLabel>{'Your Email'}</FormLabel>
              <FormControl>
                <Input placeholder={'Enter Your Email'} {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={'whatsappNumber'}
          render={({ field }) => (
            <FormItem className='space-y-3 py-3'>
              <FormLabel>{`Enter Your WhatsApp Number`}</FormLabel>
              <FormControl>
                <Input placeholder={'9999488644'} {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={'intrestedProgram'}
          render={({ field }) => (
            <FormItem className='space-y-3 py-3'>
              <FormLabel>{'For Which Seva You Wanted To Know More'}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={null} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {selectableOptions.map((cityName: any) => (
                    <SelectItem key={cityName} value={cityName}>
                      {cityName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={'message'}
          render={({ field }) => (
            <FormItem className='space-y-3 py-3'>
              <FormLabel>{'Your Message'}</FormLabel>
              <FormControl>
                <Textarea placeholder={'Enter Your Message'} {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button className='md:w-1/3 w-full my-4 ' type='submit'>
          Submit
        </Button>
      </form>
    </Form>
  );
}
