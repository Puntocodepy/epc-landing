'use client';
import React from 'react';

//Imports to Form
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';

//Imports to Modals
import {AnimatedButton} from '@/components/ui/animated-button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

type BudgetProps = {
  isOutline: boolean;
}

const ButtonBudget: React.FC<BudgetProps> = ({isOutline = false}) => {

  const btnClass: string = isOutline ? 'p-6 min-w-72 lg:min-w-60' : 'max-w-96 py-6';

  const formSchema = z.object({
    name: z.string().min(2, {
      message: 'Por favor completa con tu nombre y apellido',
    }),
    email: z.string().email({
      message: 'Por favor ingresa un correo valido',
    }),
    project: z.string().min(2, {
      message: 'Por favor ingresa los detalles de tu proyecto',
    })
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '', email: 'test@mail.com', project: ''
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <AnimatedButton className={btnClass} variant={isOutline ? 'outline' : 'default'}>
          Solicita tu presupuesto gratuito
        </AnimatedButton>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Solicitar presupuesto</DialogTitle>
          <DialogDescription>
            Tu proyecto merece un presupuesto a medida. ¡Comencemos!
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid gap-4 py-4">
              {/* Nombre------------------------------------------------------------*/}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre y Apellido</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email-------------------------------------------------------------*/}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Proyecto----------------------------------------------------------*/}
              <FormField
                control={form.control}
                name="project"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Detalles de tu proyecto</FormLabel>
                    <FormControl>
                      <Textarea className="resize-none" rows={4} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="submit">Enviar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ButtonBudget;