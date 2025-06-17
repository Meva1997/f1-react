import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import type { DriverStanding } from '../types'

interface DriverModalProps {
  driver: DriverStanding | null
  isOpen: boolean
  onClose: () => void
}

export function DriverModal({driver, isOpen, onClose} : DriverModalProps) {

  if(!driver) return null // No driver selected

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Fondo desenfocado con transparencia */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-md" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="max-w-lg w-full bg-black rounded-lg shadow-lg p-6">
            <DialogTitle className="text-2xl font-bold mb-4">
              {driver.givenName + " " + driver.familyName}
            </DialogTitle>

            <img
              src={driver.img}
              alt={driver.givenName + ' ' + driver.familyName}
              className="w-full object-cover rounded-md mb-4"
            />

            <p className="text-white">
              <strong className='text-lg text-red-600'>Team:</strong> {driver.team}
            </p>
            <p className="text-white">
              <strong className='text-lg text-red-600'>Points:</strong> {driver.points}
            </p>
            <p className="text-white">
              <strong className='text-lg text-red-600'>Nationality:</strong> {driver.nationality}
            </p>
            <p className="text-white">
              <strong className='text-lg text-red-600'>Age:</strong> {driver.age} years old
            </p>
            <p className="text-white">
              <strong className='text-lg text-red-600'>About:</strong> {driver.description} 
            </p>


            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-red-600 hover:bg-red-800 rounded-md border-2 border-red-800 cursor-pointer"
              >
                Close
              </button>
            </div>
          </DialogPanel>
      </div>
    </Dialog>
  );
}