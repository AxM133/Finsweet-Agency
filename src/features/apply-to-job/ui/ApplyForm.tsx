import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { Link } from 'react-router'

import { ROUTES } from '@/shared/config'
import { useZodForm } from '@/shared/lib'
import { ArrowRightIcon, Button, CheckIcon, Checkbox, EASE, Input, Spinner, Textarea } from '@/shared/ui'

import { useApplyToJob } from '../api/use-apply-to-job'
import { applyToJobSchema } from '../model/schema'

type ApplyFormProps = {
  jobSlug: string
  jobTitle: string
}

export function ApplyForm({ jobSlug, jobTitle }: ApplyFormProps) {
  const [isSent, setIsSent] = useState(false)
  const { mutateAsync } = useApplyToJob()

  const { formProps, errors, isSubmitting, submitError } = useZodForm({
    schema: applyToJobSchema,
    onSubmit: async (values) => {
      await mutateAsync({ ...values, jobSlug })
      setIsSent(true)
    },
  })

  return (
    <AnimatePresence mode="wait" initial={false}>
      {isSent ? (
        <motion.div
          key="sent"
          role="status"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="flex flex-col items-start gap-5 bg-mint p-8 sm:p-12"
        >
          <span className="grid size-10 place-items-center bg-primary text-white">
            <CheckIcon className="size-6" />
          </span>
          <p className="text-2xl font-semibold text-ink">Application for “{jobTitle}” received!</p>
          <p className="max-w-lg text-sm leading-relaxed text-muted">
            Thank you for your interest. Our team will review your application and contact you within a few working
            days.
          </p>
          <Button as={Link} to={ROUTES.careers} variant="link" withArrow>
            See other positions
          </Button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-6"
          {...formProps}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Input name="firstName" variant="filled" label="First Name" autoComplete="given-name" error={errors.firstName} disabled={isSubmitting} />
            <Input name="lastName" variant="filled" label="Last Name" autoComplete="family-name" error={errors.lastName} disabled={isSubmitting} />
            <Input name="email" type="email" variant="filled" label="Email Id" autoComplete="email" error={errors.email} disabled={isSubmitting} />
            <Input name="phone" type="tel" variant="filled" label="Mobile No" autoComplete="tel" error={errors.phone} disabled={isSubmitting} />
          </div>

          <Textarea
            name="motivation"
            variant="filled"
            label="Why do you think you are a good fit for Finsweet?"
            error={errors.motivation}
            disabled={isSubmitting}
          />

          <Checkbox
            name="consent"
            error={errors.consent}
            disabled={isSubmitting}
            label={
              <>
                I agree to accept the{' '}
                <Link to={ROUTES.privacyPolicy} className="text-primary underline-offset-2 hover:underline">
                  privacy policy
                </Link>
                . We will add your contact details provided in this form to our system for contacting you regarding
                your request.
              </>
            }
          />

          {submitError && (
            <p role="alert" className="text-sm text-red-500">
              {submitError}
            </p>
          )}

          <Button type="submit" disabled={isSubmitting} className="self-start">
            {isSubmitting ? (
              <>
                Sending
                <Spinner className="size-5" />
              </>
            ) : (
              <>
                Submit Application
                <ArrowRightIcon className="size-5" />
              </>
            )}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
