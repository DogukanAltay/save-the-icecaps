<template>
  <div align='center'>
    <ValidationObserver ref='observer'>
      <b-form id='user-form' v-if='showForm' @submit.prevent='onSubmit' novalidate>

        <b-form-group id='input-user-name' label='Your Name:' label-for='user-name'>
          <ValidationProvider name='name' rules='required' v-slot='{ errors, valid }'>
            <b-form-input
                :state='errors[0] ? false : (valid ? true : null)'
                id='user-name'
                name='name'
                v-model='form.userName'
                placeholder='Enter name'
                type='text'
                required
            ></b-form-input>
            <b-form-invalid-feedback :state='errors.length == 0'>Name is required</b-form-invalid-feedback>
          </ValidationProvider>
        </b-form-group>

        <b-form-group
            id='user-address'
            label='Your Home Address: '
            description='We Will Send The Bewsletter to This Address.' label-for='user-address'
        >
          <ValidationProvider name='address' rules='required' v-slot='{ errors, valid }'>
            <b-form-input
                :state='errors[0] ? false : (valid ? true : null)'
                id='user-address'
                name='address'
                v-model='form.userAddress'
                placeholder='Enter Your Address. (Street Name, Door Number, City, etc.)'
                type='text'
                required
            ></b-form-input>
            <b-form-invalid-feedback :state='errors.length == 0'>Address is required</b-form-invalid-feedback>
          </ValidationProvider>
        </b-form-group>

        <b-form-group
            id='input-group-gender'
            label='Your Gender'
            label-for='user-gender'
            description='Please Select Your Gender Or Not. It is Up To You!'
        >
          <b-form-select
              id='user-gender'
              v-model='form.userGender'
              :options='genderOptions'
          ></b-form-select>
        </b-form-group>

        <b-form-group
            id='input-user-birth-date'
            label='Your Birth Date'
            label-for='user-birth-date'
            description='Please Select Birth Date. Totally Optional We Know You Are Still Young!'
        >
          <b-calendar
              id='user-birth-date'
              v-model='form.userBirthDate'
              locale='en-TR'
              class='mb-2'
          ></b-calendar>
        </b-form-group>

        <b-form-group
            id='input-user-donation'
            label='Your Monthly Donation Amount (In Euros): '
        >
          <ValidationProvider name='amount' rules='min_value:1' v-slot='{ errors, valid }'>
            <b-form-input
                :state='errors[0] ? false : (valid ? true : null)'
                id='user-donation'
                type='number'
                v-model='form.userDonation'
                placeholder='Monthly Donation in Euros'
                min=1
                required
            ></b-form-input>
            <b-form-invalid-feedback :state='errors.length == 0'>Minimum Donation is 1€.
            </b-form-invalid-feedback>
          </ValidationProvider>
        </b-form-group>

        <b-form-group
            id='input-donation-period'
            v-slot='{ ariaDescribedby }'
        >
          <ValidationProvider name='donationPeriod' rules='required' v-slot='{ errors }'>
            <b-form-checkbox-group
                v-model='form.userDonationPeriod'
                id='donation-period'
                :aria-describedby='ariaDescribedby'
                required
            >
              <b-form-checkbox value='monthly'>I Want to Save Polar Bears Every Month!(Monthly Recurring Donation)
              </b-form-checkbox>
              <b-form-checkbox value='one-time'>I Want To Save Polar Bears Once And For All! (One-time Donation)
              </b-form-checkbox>
            </b-form-checkbox-group>
            <b-form-invalid-feedback :state='errors.length == 0'>Please Choose Donation Period.
            </b-form-invalid-feedback>
          </ValidationProvider>
        </b-form-group>

        <b-form-group
            id='input-terms-check'
            v-slot='{ ariaDescribedby }'
        >
          <ValidationProvider name='termsCheck' rules='required' v-slot='{ errors }'>
            <b-form-checkbox-group
                v-model='form.userTermsCheck'
                id='terms-check'
                :aria-describedby='ariaDescribedby'
                required
            >
              <b-form-checkbox>Accept Terms and Conditions.</b-form-checkbox>
            </b-form-checkbox-group>
            <b-form-invalid-feedback :state='errors.length == 0'>Please Accept the Terms and Conditions.
            </b-form-invalid-feedback>
          </ValidationProvider>
        </b-form-group>


        <b-form-group
            id='input-consent-check'
            v-slot='{ ariaDescribedby }'
        >
          <b-form-checkbox-group
              v-model='form.userConsentCheck'
              id='consent-check'
              :aria-describedby='ariaDescribedby'
          >
            <b-form-checkbox>I am giving consent to process my additional data targeted advertisements.
            </b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button id='show-btn' @click='showSubModal'>Submit Subscription</b-button>

        <b-modal id='sub-modal' ref='my-modal' hide-footer title='Subscription Confirmation'>
          <div class='d-block text-center'>
            <h3>You Will Be Donating {{ form.userDonation }} € and Your First Newsletter Will Be Sent By
              {{ firstNewsletterArrivalDate() }}. Thank You!</h3>
          </div>
          <b-button size='sm' variant='outline-danger' block @click='hideSubModal'>Cancel Subscription
          </b-button>
          <b-button type='submit' variant='outline-success' form='user-form' block @click='hideSubModal'>Save the ICE
            CAPS
            YEY!
          </b-button>
        </b-modal>
      </b-form>
    </ValidationObserver>
  </div>
</template>

<script lang='ts'>
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class SubscribeForm extends Vue {

  $refs!: {
    observer: any
  }

  private form: Record<string, unknown> = {
    userName: '',
    userAddress: '',
    userGender: '',
    userBirthDate: Date(),
    userDonation: '',
    userDonationPeriod: '',
    userTermsCheck: ''
  }
  private genderOptions: string[] = ['Male', 'Female', 'Not Specified']
  private showForm = true
  private termsPreCheck = true


  public async onSubmit(): Promise<void> {
    const isValid = await this.$refs.observer.validate();
    if (isValid) {
      console.log(this.form);
      return;
    }
  }

  private showSubModal() {
    this.$bvModal.show('sub-modal')
  }

  private hideSubModal() {
    this.$bvModal.hide('sub-modal')
  }

  private firstNewsletterArrivalDate(): string {
    // Send newsletter on the first day of next month of subscription.
    var currentDay = new Date();
    var firstDay = new Date(currentDay.getFullYear(), currentDay.getMonth() + 1, 1);

    return firstDay.toDateString()
  }
}


</script>

<style scoped>

</style>